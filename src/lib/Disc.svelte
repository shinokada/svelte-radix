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
    d="M7.49915 0.877045C11.1566 0.877045 14.1218 3.84178 14.1222 7.49911C14.1222 11.1568 11.1568 14.1222 7.49915 14.1222C3.84181 14.1218 0.877075 11.1565 0.877075 7.49911C0.877486 3.84203 3.84206 0.877456 7.49915 0.877045ZM7.49915 1.82626C4.36673 1.82667 1.8267 4.3667 1.82629 7.49911C1.82629 10.6319 4.36648 13.1716 7.49915 13.172C10.6321 13.172 13.172 10.6321 13.172 7.49911C13.1716 4.36645 10.6319 1.82626 7.49915 1.82626ZM7.68665 5.68759C8.60556 5.78095 9.32321 6.55659 9.32336 7.50009L9.3136 7.68661C9.22016 8.60551 8.44365 9.32327 7.50012 9.32333L7.3136 9.31357C6.45615 9.22626 5.77484 8.54409 5.68762 7.68661L5.67786 7.50009C5.67802 6.49376 6.49379 5.67799 7.50012 5.67783L7.68665 5.68759ZM7.50012 6.62802C7.01846 6.62819 6.62822 7.01843 6.62805 7.50009C6.62825 7.98173 7.01848 8.37297 7.50012 8.37314C7.98185 8.37307 8.37297 7.98179 8.37317 7.50009C8.373 7.01837 7.98187 6.62809 7.50012 6.62802Z"
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
