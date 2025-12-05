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
    d="M12.5814 10.1088C12.7632 10.1465 12.9008 10.3074 12.9008 10.5004C12.9006 10.6932 12.7632 10.8544 12.5814 10.892L12.5004 10.9008H2.50037C2.27958 10.9008 2.10019 10.7211 2.09998 10.5004C2.09998 10.2795 2.27945 10.1 2.50037 10.1H12.5004L12.5814 10.1088ZM12.5814 8.1088C12.7632 8.14645 12.9008 8.30743 12.9008 8.5004C12.9006 8.69325 12.7632 8.85443 12.5814 8.892L12.5004 8.90079H2.50037C2.27958 8.90079 2.10019 8.72113 2.09998 8.5004C2.09998 8.27948 2.27945 8.10001 2.50037 8.10001H12.5004L12.5814 8.1088ZM12.5814 6.1088C12.7632 6.14645 12.9008 6.30743 12.9008 6.5004C12.9006 6.69325 12.7632 6.85443 12.5814 6.892L12.5004 6.90079H2.50037C2.27958 6.90079 2.10019 6.72113 2.09998 6.5004C2.09998 6.27948 2.27945 6.10001 2.50037 6.10001H12.5004L12.5814 6.1088ZM12.5814 4.1088C12.7632 4.14645 12.9008 4.30743 12.9008 4.5004C12.9006 4.69325 12.7632 4.85443 12.5814 4.892L12.5004 4.90079H2.50037C2.27958 4.90079 2.10019 4.72113 2.09998 4.5004C2.09998 4.27948 2.27945 4.10001 2.50037 4.10001H12.5004L12.5814 4.1088Z"
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
