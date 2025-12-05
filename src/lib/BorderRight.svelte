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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 7)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 5 13)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 7)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 3 13)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 7)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 1 7)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 13)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 1 13)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 5)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 1 5)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 3)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 1 3)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 9)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 1 9)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 11)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 1 11)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 7)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 9 13)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 7)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 11 13)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 1)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 3 1)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 1)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 1 1)"
  /><rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 1)" /><rect
    width="1"
    height="1"
    rx=".5"
    transform="matrix(0 1 1 0 11 1)"
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
