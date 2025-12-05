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
    d="M13.9999 8.00001C13.9999 8.55229 13.5522 9.00001 12.9999 9.00001L7.99988 9.00001L7.99988 13.5C7.99988 13.7761 7.77602 14 7.49988 14C7.22374 14 6.99988 13.7761 6.99988 13.5L6.99988 9.00001L1.99988 9.00001C1.44759 9.00001 0.999878 8.55229 0.999878 8.00001L0.999878 7.00001C0.999878 6.44772 1.44759 6.00001 1.99988 6.00001L6.99988 6.00001L6.99988 1.50001C6.99988 1.22387 7.22374 1.00001 7.49988 1.00001C7.77602 1.00001 7.99988 1.22387 7.99988 1.50001L7.99988 6.00001L12.9999 6.00001C13.5522 6.00001 13.9999 6.44772 13.9999 7.00001L13.9999 8.00001Z"
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
