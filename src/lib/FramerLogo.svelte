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
    d="M11.6006 1.00706C11.8285 1.05359 12 1.25559 12 1.4973V5.50023C11.9999 5.77627 11.7761 6.00022 11.5 6.00023H8.63574L11.5293 9.16234L11.5742 9.21996C11.6695 9.3609 11.6871 9.54261 11.6172 9.7014C11.5373 9.88272 11.3583 10.0001 11.1602 10.0002H8V13.5002C7.99991 13.7024 7.87818 13.8848 7.69141 13.9621C7.50462 14.0395 7.28948 13.9967 7.14648 13.8537L3.14648 9.85374C3.05277 9.76003 3.00006 9.63276 3 9.50023V5.50023L3.00977 5.39964C3.05621 5.17157 3.25821 5.00023 3.5 5.00023H6.36523L3.4707 1.83421C3.33737 1.68805 3.30313 1.47723 3.38281 1.29613C3.46269 1.11485 3.64175 0.99738 3.83984 0.997299H11.5L11.6006 1.00706ZM7 12.2932V10.0002H4.70703L7 12.2932ZM4 9.00023H10.0254L7.28027 6.00023H4V9.00023ZM7.7207 5.00023H11V1.9973H4.97461L7.7207 5.00023Z"
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
