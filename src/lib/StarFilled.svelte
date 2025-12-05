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
    d="M7.22257 0.665927C7.32508 0.419634 7.67476 0.419617 7.77726 0.665927L9.413 4.6005C9.45615 4.70425 9.55396 4.77497 9.66593 4.78409L13.914 5.12491C14.1799 5.14635 14.2875 5.47869 14.0849 5.65226L10.8485 8.42374C10.7632 8.49693 10.7258 8.61221 10.7519 8.72159L11.7411 12.8661C11.803 13.1256 11.5206 13.331 11.2929 13.1923L7.65616 10.9706C7.56022 10.9121 7.43961 10.9121 7.34366 10.9706L3.70694 13.1923C3.47926 13.3311 3.19681 13.1256 3.2587 12.8661L4.24796 8.72159C4.27405 8.61223 4.23661 8.49693 4.15128 8.42374L0.914951 5.65226C0.712311 5.47867 0.819914 5.1463 1.08585 5.12491L5.3339 4.78409C5.44584 4.77494 5.54368 4.70422 5.58683 4.6005L7.22257 0.665927Z"
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
