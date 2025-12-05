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
    d="M12.6533 1.00781C13.4097 1.08461 14 1.72334 14 2.5V12.5L13.9922 12.6533C13.9205 13.3593 13.3593 13.9205 12.6533 13.9922L12.5 14H2.5L2.34668 13.9922C1.64069 13.9205 1.07949 13.3593 1.00781 12.6533L1 12.5V2.5C1 1.72334 1.59028 1.08461 2.34668 1.00781L2.5 1H12.5L12.6533 1.00781ZM2 8V12.5C2 12.7761 2.22386 13 2.5 13H7V8H2ZM8 8V13H12.5C12.7761 13 13 12.7761 13 12.5V8H8ZM2.5 2C2.22386 2 2 2.22386 2 2.5V7H7V2H2.5ZM8 7H13V2.5C13 2.22386 12.7761 2 12.5 2H8V7Z"
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
