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
    d="M7.49933 0.877014C11.1567 0.877014 14.122 3.84175 14.1224 7.49908C14.1224 11.1567 11.157 14.1221 7.49933 14.1221C3.84199 14.1217 0.877258 11.1565 0.877258 7.49908C0.877669 3.842 3.84225 0.877426 7.49933 0.877014ZM7.49933 1.82623C4.36692 1.82664 1.82689 4.36667 1.82648 7.49908C1.82648 10.6318 4.36667 13.1715 7.49933 13.1719C10.6323 13.1719 13.1722 10.6321 13.1722 7.49908C13.1718 4.36642 10.6321 1.82623 7.49933 1.82623ZM7.50031 4.00006C7.77631 4.00023 8.00031 4.22402 8.00031 4.50006V7.29303L9.85382 9.14655L9.91827 9.22467C10.0463 9.41868 10.0245 9.68276 9.85382 9.85358C9.68303 10.0244 9.41897 10.046 9.22491 9.91803L9.14679 9.85358L7.14679 7.85358C7.05303 7.75982 7.00032 7.63265 7.00031 7.50006V4.50006C7.00031 4.22392 7.22416 4.00006 7.50031 4.00006Z"
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
