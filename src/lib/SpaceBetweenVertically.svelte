<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'space between vertically',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
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
    d="M0.999878 0.5C0.999878 0.223858 1.22374 0 1.49988 0H13.4999C13.776 0 13.9999 0.223858 13.9999 0.5C13.9999 0.776142 13.776 1 13.4999 1L9 1V5C9 5.55228 8.55228 6 8 6H7C6.44772 6 6 5.55228 6 5V1H1.49988C1.22374 1 0.999878 0.776142 0.999878 0.5ZM7 9C6.44772 9 6 9.44771 6 10V14H1.49988C1.22374 14 0.999878 14.2239 0.999878 14.5C0.999878 14.7761 1.22374 15 1.49988 15H13.4999C13.776 15 13.9999 14.7761 13.9999 14.5C13.9999 14.2239 13.776 14 13.4999 14H9V10C9 9.44772 8.55228 9 8 9H7Z"
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
@prop ariaLabel = 'space between vertically'
@prop ...restProps
-->
