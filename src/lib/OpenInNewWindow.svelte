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
    d="M8.5 6C8.53267 6 8.56549 6.00242 8.59766 6.00879C8.64875 6.01889 8.69602 6.03909 8.74023 6.06348C8.78055 6.08569 8.81933 6.1123 8.85352 6.14648C8.88737 6.18034 8.91343 6.21891 8.93555 6.25879C8.96008 6.30299 8.98 6.35024 8.99023 6.40137C8.99675 6.43389 9 6.46695 9 6.5V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70703L2.85352 12.8535C2.65825 13.0488 2.34175 13.0488 2.14648 12.8535C1.95122 12.6583 1.95122 12.3417 2.14648 12.1465L7.29297 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5ZM12 2C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H8.5C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12H12V3H3V6.5C3 6.77614 2.77614 7 2.5 7C2.22386 7 2 6.77614 2 6.5V3C2 2.44772 2.44772 2 3 2H12Z"
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
