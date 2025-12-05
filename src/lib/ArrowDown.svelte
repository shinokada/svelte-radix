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
    d="M7.50021 2C7.77635 2 8.00021 2.22386 8.00021 2.5V11.293L11.1467 8.14648C11.342 7.95122 11.6585 7.95122 11.8537 8.14648C12.049 8.34175 12.049 8.65825 11.8537 8.85352L7.85372 12.8535C7.75995 12.9473 7.63282 13 7.50021 13C7.3676 13 7.24046 12.9473 7.14669 12.8535L3.14669 8.85352L3.08224 8.77539C2.95407 8.58131 2.97583 8.31735 3.14669 8.14648C3.31756 7.97562 3.58152 7.95387 3.7756 8.08203L3.85372 8.14648L7.00021 11.293V2.5C7.00021 2.22386 7.22407 2 7.50021 2Z"
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
