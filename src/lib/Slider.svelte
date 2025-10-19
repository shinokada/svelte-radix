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
    d="M8.78027 4.76407C10.0011 4.88786 10.9854 5.81016 11.2041 7.0004H14.5L14.6006 7.01016C14.8285 7.05672 15 7.25871 15 7.5004C14.9998 7.74193 14.8284 7.94413 14.6006 7.99063L14.5 8.0004H11.2031C10.9678 9.2802 9.84783 10.2502 8.5 10.2504L8.21875 10.2357C6.99829 10.1118 6.01467 9.19024 5.7959 8.0004H0.5C0.22399 8.0004 0.000214414 7.77636 0 7.5004C0 7.22425 0.223858 7.0004 0.5 7.0004H5.79688C6.03222 5.72027 7.15198 4.74959 8.5 4.74942L8.78027 4.76407ZM8.5 5.69962C7.50578 5.69981 6.69922 6.50613 6.69922 7.5004C6.69948 8.49444 7.50594 9.30001 8.5 9.3002C9.494 9.29994 10.2995 8.4944 10.2998 7.5004C10.2998 6.50617 9.49416 5.69988 8.5 5.69962Z"
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
