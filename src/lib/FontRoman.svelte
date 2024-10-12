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
    ariaLabel = 'font roman',
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
    d="M4.79993 3.50017C4.79993 3.25164 5.0014 3.05017 5.24993 3.05017H9.74993C9.99845 3.05017 10.1999 3.25164 10.1999 3.50017C10.1999 3.7487 9.99845 3.95017 9.74993 3.95017H8.09993V11.05H9.74994C9.99847 11.05 10.1999 11.2515 10.1999 11.5C10.1999 11.7486 9.99847 11.95 9.74994 11.95H5.24994C5.00141 11.95 4.79994 11.7486 4.79994 11.5C4.79994 11.2515 5.00141 11.05 5.24994 11.05H6.89993V3.95017H5.24993C5.0014 3.95017 4.79993 3.7487 4.79993 3.50017Z"
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
@prop ariaLabel = 'font roman'
@prop ...restProps
-->
