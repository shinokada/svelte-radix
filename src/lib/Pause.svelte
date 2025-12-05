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
    d="M5.49982 2.19999C5.80351 2.19999 6.04952 2.44613 6.04962 2.74979V12.2498C6.04962 12.5536 5.80357 12.7996 5.49982 12.7996C5.19615 12.7995 4.95001 12.5535 4.95001 12.2498V2.74979C4.95012 2.44619 5.19622 2.20009 5.49982 2.19999ZM9.49982 2.19999C9.80351 2.19999 10.0495 2.44613 10.0496 2.74979V12.2498C10.0496 12.5536 9.80357 12.7996 9.49982 12.7996C9.19615 12.7995 8.95001 12.5535 8.95001 12.2498V2.74979C8.95012 2.44619 9.19622 2.20009 9.49982 2.19999Z"
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
