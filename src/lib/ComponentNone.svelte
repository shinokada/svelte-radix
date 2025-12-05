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
    d="M7.22405 1.42518C7.41815 1.29688 7.68302 1.31871 7.85393 1.48963L10.3285 3.96424L12.6469 1.64686C12.8422 1.45162 13.1587 1.4516 13.3539 1.64686C13.5488 1.84214 13.549 2.15875 13.3539 2.35389L11.0356 4.67127L13.5102 7.14686L13.5746 7.224C13.7029 7.4181 13.6811 7.68297 13.5102 7.85389L7.85393 13.5101C7.65869 13.7054 7.34217 13.7053 7.1469 13.5101L4.67132 11.0355L2.35393 13.3539C2.1588 13.549 1.84219 13.5488 1.6469 13.3539C1.45164 13.1586 1.45164 12.8421 1.6469 12.6469L3.96428 10.3285L1.48967 7.85389C1.29448 7.65869 1.2946 7.34213 1.48967 7.14686L7.1469 1.48963L7.22405 1.42518ZM5.37835 10.3285L7.50042 12.4496L12.4496 7.50037L10.3285 5.3783L5.37835 10.3285ZM2.55022 7.50037L4.67132 9.62147L9.62151 4.67127L7.50042 2.55018L2.55022 7.50037Z"
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
