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

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 15 15"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M11.4998 3C11.6322 3.00005 11.7596 3.05295 11.8533 3.14648C11.9468 3.24013 11.9997 3.36768 11.9998 3.5V9L11.99 9.10156C11.9432 9.32901 11.7411 9.49991 11.4998 9.5C11.2582 9.49991 11.0561 9.32846 11.0096 9.10059L10.9998 9V4.70703L4.35333 11.3535C4.15816 11.5487 3.84158 11.5485 3.6463 11.3535C3.45133 11.1582 3.45114 10.8416 3.6463 10.6465L10.2928 4H5.99981C5.7238 3.99996 5.49996 3.77599 5.49981 3.5C5.49996 3.22401 5.7238 3.00004 5.99981 3H11.4998Z"
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
