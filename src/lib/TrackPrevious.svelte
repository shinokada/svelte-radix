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
    d="M2.50006 2.19987C2.19637 2.19987 1.95036 2.44601 1.95026 2.74968V12.2497C1.95026 12.5534 2.1963 12.7995 2.50006 12.7995C2.80371 12.7994 3.04987 12.5534 3.04987 12.2497V7.7155C3.09541 7.81069 3.17002 7.89103 3.26666 7.94206L12.2667 12.6921C12.4216 12.7738 12.6078 12.7679 12.7579 12.6774C12.9079 12.5869 13.0001 12.4249 13.0001 12.2497V2.74968C13 2.57453 12.9079 2.41239 12.7579 2.32195C12.6079 2.23159 12.4216 2.22563 12.2667 2.3073L3.26666 7.0573C3.17011 7.10825 3.09545 7.18882 3.04987 7.28386V2.74968C3.04976 2.44609 2.80364 2.20001 2.50006 2.19987ZM12.0001 11.4196L4.57233 7.49968L12.0001 3.57878V11.4196Z"
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
