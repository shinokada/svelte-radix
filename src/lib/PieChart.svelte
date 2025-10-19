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
    d="M7.5004 0.850006C11.1729 0.850217 14.1498 3.82765 14.1498 7.5004C14.1498 11.1732 11.1729 14.1506 7.5004 14.1508C3.82767 14.1508 0.850006 11.1733 0.850006 7.5004C0.850024 3.82752 3.82768 0.850006 7.5004 0.850006ZM7.5004 1.85001C4.38003 1.85001 1.85002 4.37974 1.85001 7.5004C1.85001 10.6211 4.38002 13.1508 7.5004 13.1508C10.6206 13.1506 13.1498 10.6209 13.1498 7.5004C13.1498 4.37987 10.6206 1.85022 7.5004 1.85001ZM7.5004 3.10001C9.93026 3.10022 11.9008 5.07026 11.9008 7.5004C11.9008 7.66946 11.89 7.83629 11.8715 8.0004H7.0004V3.12833C7.16438 3.10979 7.33146 3.10001 7.5004 3.10001Z"
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
