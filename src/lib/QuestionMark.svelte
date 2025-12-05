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
    d="M7.50024 11.6071C7.98326 11.6072 8.37501 11.9991 8.37524 12.4821C8.37524 12.9653 7.9834 13.357 7.50024 13.3571C7.01699 13.3571 6.62524 12.9653 6.62524 12.4821C6.62547 11.999 7.01714 11.6071 7.50024 11.6071ZM7.50024 0.77504C9.21883 0.775142 11.0754 2.12786 11.0754 4.10023C11.0754 5.75307 10.1328 6.57417 9.38208 7.23988C8.62999 7.90686 8.07544 8.41581 8.07544 9.50063C8.07511 9.81785 7.81752 10.0747 7.50024 10.0748C7.18288 10.0748 6.92538 9.81791 6.92505 9.50063C6.92505 7.85828 7.87058 7.04271 8.61841 6.37953C9.36764 5.7151 9.92498 5.19868 9.92505 4.10023C9.92505 2.91132 8.74295 1.92553 7.50024 1.92543C6.25747 1.92543 5.07544 2.91126 5.07544 4.10023C5.07533 4.41764 4.81765 4.67532 4.50024 4.67543C4.18275 4.67543 3.92516 4.4177 3.92505 4.10023C3.92505 2.12779 5.7816 0.77504 7.50024 0.77504Z"
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
