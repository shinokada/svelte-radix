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
    d="M-5.46388e-07 1.49999C1.19309e-06 1.22385 0.223856 0.999992 0.499995 0.999992C0.776135 0.999992 0.99999 1.22385 0.999991 1.49999L0.999992 5.99995L11.9999 5.99995C12.5522 5.99995 12.9999 6.44766 12.9999 6.99994L12.9999 7.99993C12.9999 8.55221 12.5522 8.99993 11.9999 8.99993L0.999992 8.99993L0.999992 13.4999C0.999992 13.776 0.776136 13.9999 0.499996 13.9999C0.223856 13.9999 -2.18555e-08 13.776 -2.18555e-08 13.4999L-5.46388e-07 1.49999Z"
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
