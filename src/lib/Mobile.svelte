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
    d="M10.5 1C11.3284 1 12 1.67157 12 2.5V12.5C12 13.3284 11.3284 14 10.5 14H4.5C3.67157 14 3 13.3284 3 12.5V2.5C3 1.67157 3.67157 1 4.5 1H10.5ZM4.5 2C4.22386 2 4 2.22386 4 2.5V12.5C4 12.7761 4.22386 13 4.5 13H10.5C10.7761 13 11 12.7761 11 12.5V2.5C11 2.22386 10.7761 2 10.5 2H4.5ZM9.07031 11.6572C9.2299 11.6898 9.34961 11.8308 9.34961 12C9.34961 12.1692 9.2299 12.3102 9.07031 12.3428L9 12.3496H6C5.8067 12.3496 5.65039 12.1933 5.65039 12C5.65039 11.8067 5.8067 11.6504 6 11.6504H9L9.07031 11.6572Z"
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
