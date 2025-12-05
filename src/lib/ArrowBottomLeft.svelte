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
    d="M3.50019 12C3.36778 12 3.24037 11.9471 3.14667 11.8535C3.05319 11.7599 3.0003 11.6323 3.00019 11.5V6L3.00995 5.89844C3.05682 5.67099 3.25888 5.50009 3.50019 5.5C3.74179 5.50009 3.94388 5.67154 3.99042 5.89941L4.00019 6V10.293L10.6467 3.64648C10.8418 3.45132 11.1584 3.45152 11.3537 3.64648C11.5487 3.84177 11.5489 4.15835 11.3537 4.35352L4.70722 11H9.00019C9.2762 11 9.50004 11.224 9.50019 11.5C9.50004 11.776 9.2762 12 9.00019 12H3.50019Z"
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
