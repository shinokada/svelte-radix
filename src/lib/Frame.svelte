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
    d="M10.5 1C10.7761 1 11 1.22386 11 1.5V4H13.5L13.6006 4.00977C13.8286 4.05629 14 4.25829 14 4.5C14 4.74171 13.8286 4.94371 13.6006 4.99023L13.5 5H11V10H13.5L13.6006 10.0098C13.8286 10.0563 14 10.2583 14 10.5C14 10.7417 13.8286 10.9437 13.6006 10.9902L13.5 11H11V13.5L10.9902 13.6006C10.9437 13.8286 10.7417 14 10.5 14C10.2583 14 10.0563 13.8286 10.0098 13.6006L10 13.5V11H5V13.5C5 13.7761 4.77614 14 4.5 14C4.22386 14 4 13.7761 4 13.5V11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H4V5H1.5C1.22386 5 1 4.77614 1 4.5C1 4.22386 1.22386 4 1.5 4H4V1.5C4 1.22386 4.22386 1 4.5 1C4.77614 1 5 1.22386 5 1.5V4H10V1.5C10 1.22386 10.2239 1 10.5 1ZM5 10H10V5H5V10Z"
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
