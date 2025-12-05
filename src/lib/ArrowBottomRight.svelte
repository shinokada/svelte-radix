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
    d="M11.4998 12C11.6322 12 11.7596 11.9471 11.8533 11.8535C11.9468 11.7599 11.9997 11.6323 11.9998 11.5V6L11.99 5.89844C11.9432 5.67099 11.7411 5.50009 11.4998 5.5C11.2582 5.50009 11.0561 5.67154 11.0096 5.89941L10.9998 6V10.293L4.35333 3.64648C4.15816 3.45132 3.84158 3.45152 3.6463 3.64648C3.45133 3.84177 3.45114 4.15835 3.6463 4.35352L10.2928 11H5.99981C5.7238 11 5.49996 11.224 5.49981 11.5C5.49996 11.776 5.7238 12 5.99981 12H11.4998Z"
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
