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
    d="M7.2517 1.62423C7.42639 1.50875 7.66428 1.52802 7.81811 1.68185L10.3181 4.18185L10.3757 4.25216C10.4911 4.42683 10.4719 4.66479 10.3181 4.81856C10.1643 4.97234 9.92637 4.99153 9.7517 4.87618L9.68139 4.81856L7.94995 3.08712V11.9133L9.68139 10.1818C9.85713 10.0061 10.1424 10.0061 10.3181 10.1818C10.4936 10.3576 10.4938 10.6429 10.3181 10.8186L7.81811 13.3186C7.73376 13.4029 7.61903 13.4503 7.49975 13.4504C7.38049 13.4504 7.26576 13.4028 7.18139 13.3186L4.68139 10.8186L4.62377 10.7483C4.50826 10.5736 4.52755 10.3357 4.68139 10.1818C4.83523 10.028 5.0731 10.0087 5.2478 10.1242L5.31811 10.1818L7.04955 11.9133V3.08712L5.31811 4.81856C5.14244 4.99423 4.85714 4.9941 4.68139 4.81856C4.50565 4.64283 4.50565 4.35758 4.68139 4.18185L7.18139 1.68185L7.2517 1.62423Z"
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
