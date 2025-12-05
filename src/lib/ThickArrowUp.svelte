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
    d="M7.49996 1C7.6614 1 7.81333 1.07764 7.90719 1.20898L12.9072 8.20898C13.016 8.36136 13.0299 8.562 12.9443 8.72852C12.8586 8.89505 12.6873 9 12.5 9H9.99996V11.5C9.99996 11.7761 9.7761 12 9.49996 12H5.49996C5.22382 12 4.99996 11.7761 4.99996 11.5V9H2.49996C2.31267 9 2.14133 8.89505 2.05563 8.72852C1.96999 8.562 1.9839 8.36136 2.09273 8.20898L7.09273 1.20898L7.17379 1.12109C7.26354 1.04384 7.37895 1 7.49996 1ZM3.47262 8H5.49996C5.7761 8 5.99996 8.22386 5.99996 8.5V11H8.99996V8.5C8.99996 8.22386 9.22382 8 9.49996 8H11.5273L7.49996 2.36035L3.47262 8Z"
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
