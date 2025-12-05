<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 15 15"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M11.5814 13.1084C11.7633 13.146 11.9007 13.307 11.9008 13.5C11.9008 13.693 11.7633 13.854 11.5814 13.8916L11.5004 13.9004H3.50037C3.27945 13.9004 3.09998 13.7209 3.09998 13.5C3.10001 13.2791 3.27947 13.0996 3.50037 13.0996H11.5004L11.5814 13.1084ZM10.5004 2.25C10.7763 2.25019 11.0004 2.47398 11.0004 2.75V8.0498C11.0004 9.98268 9.4332 11.5496 7.50037 11.5498C5.56737 11.5498 4.00037 9.9828 4.00037 8.0498V2.75C4.00037 2.47386 4.22422 2.25 4.50037 2.25C4.77635 2.25019 5.00037 2.47398 5.00037 2.75V8.0498C5.00037 9.43052 6.11965 10.5498 7.50037 10.5498C8.88092 10.5496 10.0004 9.4304 10.0004 8.0498V2.75C10.0004 2.47386 10.2242 2.25 10.5004 2.25Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
