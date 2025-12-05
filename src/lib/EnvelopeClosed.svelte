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
    d="M14 2C14.5523 2 15 2.44772 15 3V12C15 12.5523 14.5523 13 14 13H1C0.447715 13 4.02659e-09 12.5523 0 12V3C6.4426e-08 2.44772 0.447715 2 1 2H14ZM7.74121 8.87988C7.61228 8.96171 7.45211 8.9717 7.31543 8.91016L7.25879 8.87988L1 4.90723V12H14V4.90723L7.74121 8.87988ZM1 3.9248C1.05352 3.92477 1.10746 3.93448 1.15918 3.9541L1.24121 3.99512L7.5 7.9668L13.7588 3.99512C13.8337 3.94756 13.9174 3.92472 14 3.9248V3H1V3.9248Z"
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
