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
  <circle cx="4.5" cy="2.5" r=".6" /><circle cx="4.5" cy="4.5" r=".6" /><circle
    cx="4.5"
    cy="6.499"
    r=".6"
  /><circle cx="4.5" cy="8.499" r=".6" /><circle cx="4.5" cy="10.498" r=".6" /><circle
    cx="4.5"
    cy="12.498"
    r=".6"
  /><circle cx="6.5" cy="2.5" r=".6" /><circle cx="6.5" cy="4.5" r=".6" /><circle
    cx="6.5"
    cy="6.499"
    r=".6"
  /><circle cx="6.5" cy="8.499" r=".6" /><circle cx="6.5" cy="10.498" r=".6" /><circle
    cx="6.5"
    cy="12.498"
    r=".6"
  /><circle cx="8.499" cy="2.5" r=".6" /><circle cx="8.499" cy="4.5" r=".6" /><circle
    cx="8.499"
    cy="6.499"
    r=".6"
  /><circle cx="8.499" cy="8.499" r=".6" /><circle cx="8.499" cy="10.498" r=".6" /><circle
    cx="8.499"
    cy="12.498"
    r=".6"
  /><circle cx="10.499" cy="2.5" r=".6" /><circle cx="10.499" cy="4.5" r=".6" /><circle
    cx="10.499"
    cy="6.499"
    r=".6"
  /><circle cx="10.499" cy="8.499" r=".6" /><circle cx="10.499" cy="10.498" r=".6" /><circle
    cx="10.499"
    cy="12.498"
    r=".6"
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
