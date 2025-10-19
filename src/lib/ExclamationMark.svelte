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
    d="M7.49971 10.7503C7.91393 10.7503 8.24971 11.086 8.24971 11.5003C8.24955 11.9143 7.91383 12.2503 7.49971 12.2503C7.08572 12.2501 6.74987 11.9142 6.74971 11.5003C6.74971 11.0861 7.08563 10.7504 7.49971 10.7503ZM7.48311 2.25029C8.00061 2.25054 8.41411 2.68038 8.39424 3.19756L8.20577 8.80498C8.19119 9.18285 7.8808 9.48168 7.50264 9.48174C7.12444 9.48174 6.81409 9.18288 6.79952 8.80498L6.571 3.19756C6.55111 2.68023 6.9654 2.25029 7.48311 2.25029Z"
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
