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
    d="M7.49915 0.876892C11.1566 0.876892 14.1218 3.84163 14.1222 7.49896C14.1222 11.1566 11.1568 14.122 7.49915 14.122C3.84181 14.1216 0.877075 11.1564 0.877075 7.49896C0.877487 3.84188 3.84206 0.877303 7.49915 0.876892ZM7.00012 1.84857C4.10141 2.10165 1.82668 4.53471 1.82629 7.49896C1.82629 10.4635 4.10123 12.8952 7.00012 13.1484V1.84857ZM8.00012 13.1484C10.8986 12.8949 13.172 10.4632 13.172 7.49896C13.1716 4.53499 10.8984 2.10203 8.00012 1.84857V13.1484Z"
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
