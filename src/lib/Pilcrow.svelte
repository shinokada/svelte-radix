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
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 5.5C3 7.983 4.99169 9 7 9V12.5C7 12.7761 7.22386 13 7.5 13C7.77614 13 8 12.7761 8 12.5V9V3.0998H9V12.5C9 12.7761 9.22386 13 9.5 13C9.77614 13 10 12.7761 10 12.5V3.0998H11.5L11.6113 3.08906C11.8617 3.03762 12.0498 2.81564 12.0498 2.55C12.0498 2.28436 11.8617 2.06238 11.6113 2.01094L11.5 2.0002H9.51411C9.50942 2.00007 9.50472 2 9.5 2C9.49528 2 9.49058 2.00007 9.48589 2.0002H8V2H7.5H7C4.99169 2 3 3.017 3 5.5Z"
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
