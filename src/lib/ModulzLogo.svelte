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
    d="M3.88867 11.833L1 14V9.66699L3.88867 11.833ZM14 14L11.1113 11.833L14 9.66699V14ZM3.88867 11.1113L1 8.94434L3.88867 6.77734V11.1113ZM14 8.94434L11.1113 11.1113V6.77734L14 8.94434ZM3.88867 6.05566L1 8.22266V3.88867L3.88867 6.05566ZM7.25879 8.22266L4.37012 6.05566L7.25879 3.88867V8.22266ZM10.6299 6.05566L7.74121 8.22266V3.88867L10.6299 6.05566ZM14 8.22266L11.1113 6.05566L14 3.88867V8.22266ZM3.88867 5.33301L1 3.16699L3.88867 1V5.33301ZM7.25879 3.16699L4.37012 5.33301V1L7.25879 3.16699ZM10.6299 5.33301L7.74121 3.16699L10.6299 1V5.33301ZM14 3.16699L11.1113 5.33301V1L14 3.16699Z"
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
