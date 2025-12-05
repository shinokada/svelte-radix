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
    d="M1.5 6.625C1.98325 6.625 2.375 7.01675 2.375 7.5C2.375 7.98325 1.98325 8.375 1.5 8.375C1.01675 8.375 0.625 7.98325 0.625 7.5C0.625 7.01675 1.01675 6.625 1.5 6.625ZM5.5 6.625C5.98325 6.625 6.375 7.01675 6.375 7.5C6.375 7.98325 5.98325 8.375 5.5 8.375C5.01675 8.375 4.625 7.98325 4.625 7.5C4.625 7.01675 5.01675 6.625 5.5 6.625ZM9.5 6.625C9.98325 6.625 10.375 7.01675 10.375 7.5C10.375 7.98325 9.98325 8.375 9.5 8.375C9.01675 8.375 8.625 7.98325 8.625 7.5C8.625 7.01675 9.01675 6.625 9.5 6.625ZM13.5 6.625C13.9832 6.625 14.375 7.01675 14.375 7.5C14.375 7.98325 13.9832 8.375 13.5 8.375C13.0168 8.375 12.625 7.98325 12.625 7.5C12.625 7.01675 13.0168 6.625 13.5 6.625Z"
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
