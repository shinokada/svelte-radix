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
    d="M12.4999 2.19987C12.8036 2.19987 13.0496 2.44601 13.0497 2.74968V12.2497C13.0497 12.5534 12.8037 12.7995 12.4999 12.7995C12.1963 12.7994 11.9501 12.5534 11.9501 12.2497V7.7155C11.9046 7.81069 11.83 7.89103 11.7333 7.94206L2.73334 12.6921C2.57839 12.7738 2.39217 12.7679 2.24213 12.6774C2.09212 12.5869 1.99994 12.4249 1.99994 12.2497V2.74968C2.00003 2.57453 2.09212 2.41239 2.24213 2.32195C2.39212 2.23159 2.57845 2.22563 2.73334 2.3073L11.7333 7.0573C11.8299 7.10825 11.9046 7.18882 11.9501 7.28386V2.74968C11.9502 2.44609 12.1964 2.20001 12.4999 2.19987ZM2.99994 11.4196L10.4277 7.49968L2.99994 3.57878V11.4196Z"
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
