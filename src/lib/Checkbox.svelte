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
    d="M12.1025 2.00488C12.6067 2.05621 13 2.48232 13 3V12L12.9951 12.1025C12.9472 12.573 12.573 12.9472 12.1025 12.9951L12 13H3L2.89746 12.9951C2.42703 12.9472 2.05278 12.573 2.00488 12.1025L2 12V3C2 2.48232 2.39333 2.05621 2.89746 2.00488L3 2H12L12.1025 2.00488ZM3 12H12V3H3V12ZM9.52539 4.94531C9.6817 4.71784 9.99311 4.66021 10.2207 4.81641C10.448 4.97276 10.5058 5.28418 10.3496 5.51172L7.09082 10.2607C7.00213 10.3898 6.8576 10.4704 6.70117 10.4775C6.54468 10.4847 6.39306 10.4174 6.29297 10.2969L4.42773 8.04785L4.37109 7.96387C4.2615 7.75883 4.30741 7.49807 4.49316 7.34375C4.67904 7.18956 4.94366 7.19251 5.125 7.33789L5.19727 7.40918L6.63965 9.14746L9.52539 4.94531Z"
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
