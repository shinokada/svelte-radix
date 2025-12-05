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
    d="M11.2248 8.08224C11.4189 7.95407 11.6829 7.97583 11.8537 8.14669C12.0246 8.31756 12.0463 8.58152 11.9182 8.7756L11.8537 8.85372L7.85372 12.8537C7.65846 13.049 7.34195 13.049 7.14669 12.8537L3.14669 8.85372L3.08224 8.7756C2.95407 8.58152 2.97583 8.31756 3.14669 8.14669C3.31756 7.97583 3.58152 7.95407 3.7756 8.08224L3.85372 8.14669L7.50021 11.7932L11.1467 8.14669L11.2248 8.08224ZM11.2248 2.08224C11.4189 1.95407 11.6829 1.97583 11.8537 2.14669C12.0246 2.31756 12.0463 2.58152 11.9182 2.7756L11.8537 2.85372L7.85372 6.85372C7.65846 7.04899 7.34195 7.04899 7.14669 6.85372L3.14669 2.85372L3.08224 2.7756C2.95407 2.58152 2.97583 2.31756 3.14669 2.14669C3.31756 1.97583 3.58152 1.95407 3.7756 2.08224L3.85372 2.14669L7.50021 5.79318L11.1467 2.14669L11.2248 2.08224Z"
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
