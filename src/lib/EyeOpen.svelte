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
    d="M7.50002 3C10.6922 3 13.3435 4.70671 14.9239 7.23535C15.0124 7.37717 15.0235 7.55201 14.9571 7.70215L14.9239 7.76465C13.3435 10.2933 10.6922 12 7.50002 12C4.30788 12 1.65659 10.2933 0.0761963 7.76465C-0.0249881 7.6026 -0.0249956 7.3974 0.0761963 7.23535L0.227563 7C1.82294 4.60122 4.4078 3 7.50002 3ZM7.50002 4C4.80354 4 2.53299 5.37905 1.09963 7.5C2.53299 9.62094 4.80354 11 7.50002 11C10.1963 11 12.4661 9.62068 13.8994 7.5C12.4661 5.3793 10.1963 4 7.50002 4ZM7.50002 5.5C8.60459 5.5 9.50002 6.39543 9.50002 7.5C9.50002 8.60457 8.60459 9.5 7.50002 9.5C6.39545 9.5 5.50002 8.60457 5.50002 7.5C5.50002 6.39543 6.39545 5.5 7.50002 5.5Z"
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
