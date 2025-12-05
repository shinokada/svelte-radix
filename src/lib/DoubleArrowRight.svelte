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
    d="M2.14669 3.14669C2.31756 2.97583 2.58152 2.95407 2.7756 3.08224L2.85372 3.14669L6.85372 7.14669C7.04899 7.34195 7.04899 7.65846 6.85372 7.85372L2.85372 11.8537L2.7756 11.9182C2.58152 12.0463 2.31756 12.0246 2.14669 11.8537C1.97583 11.6829 1.95407 11.4189 2.08224 11.2248L2.14669 11.1467L5.79318 7.50021L2.14669 3.85372L2.08224 3.7756C1.95407 3.58152 1.97583 3.31756 2.14669 3.14669ZM8.14669 3.14669C8.31756 2.97583 8.58152 2.95407 8.7756 3.08224L8.85372 3.14669L12.8537 7.14669C13.049 7.34195 13.049 7.65846 12.8537 7.85372L8.85372 11.8537L8.7756 11.9182C8.58152 12.0463 8.31756 12.0246 8.14669 11.8537C7.97583 11.6829 7.95407 11.4189 8.08224 11.2248L8.14669 11.1467L11.7932 7.50021L8.14669 3.85372L8.08224 3.7756C7.95407 3.58152 7.97583 3.31756 8.14669 3.14669Z"
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
