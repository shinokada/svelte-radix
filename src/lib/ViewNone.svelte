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
    focusable = ctx.focusable || 'false',
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
    d="M13.6533 1.00781C13.8273 1.02548 13.9923 1.07351 14.1436 1.14551L14.1748 1.12012L14.2402 1.19727C14.6935 1.45532 15 1.94115 15 2.5V12.5L14.9922 12.6533C14.9205 13.3593 14.3593 13.9205 13.6533 13.9922L13.5 14H1.5L1.34668 13.9922C1.17189 13.9744 1.0063 13.926 0.854492 13.8535L0.825195 13.8799L0.759766 13.8037C0.348324 13.5696 0.0579707 13.1473 0.0078125 12.6533L0 12.5V2.5C1.51001e-07 1.72334 0.590277 1.08461 1.34668 1.00781L1.5 1H13.5L13.6533 1.00781ZM1.85156 13H13.5C13.7761 13 14 12.7761 14 12.5V2.58691L1.85156 13ZM1.5 2C1.22386 2 1 2.22386 1 2.5V12.4121L13.1484 2H1.5Z"
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
