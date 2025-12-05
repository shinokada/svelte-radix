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
    d="M12.225 13.918C12.419 14.046 12.6831 14.0243 12.8539 13.8535L14.3539 12.3535L14.4183 12.2754C14.5281 12.1091 14.5281 11.8909 14.4183 11.7246L14.3539 11.6465L8.60389 5.8965C8.57262 5.86523 8.53689 5.84063 8.50038 5.81935V5.50002C8.50038 5.35911 8.44059 5.22466 8.33631 5.1299L2.93592 0.229508C2.76679 0.0761776 2.51513 0.056922 2.32459 0.182633C2.13397 0.308725 2.05225 0.548791 2.12733 0.764665L4.52772 7.66408L4.55897 7.73634C4.64495 7.89691 4.81408 8 5.00038 8.00002H6.31874C6.34005 8.03673 6.36542 8.07209 6.39686 8.10353L12.1469 13.8535L12.225 13.918ZM3.7162 2.28908L7.50038 5.7217V5.79298L6.29334 7.00002H5.35487L3.7162 2.28908ZM7.45741 7.75002L8.25038 6.95705L13.2933 12L12.5004 12.793L7.45741 7.75002Z"
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
