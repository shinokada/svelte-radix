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

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 15 15"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M7.49915 0.876907C11.1566 0.876907 14.1218 3.84164 14.1222 7.49898C14.1222 11.1566 11.1568 14.122 7.49915 14.122C3.84181 14.1216 0.877075 11.1564 0.877075 7.49898C0.877487 3.8419 3.84206 0.877318 7.49915 0.876907ZM7.49915 1.82613C4.36673 1.82654 1.82671 4.36657 1.82629 7.49898C1.82629 10.6317 4.36648 13.1714 7.49915 13.1718C10.6321 13.1718 13.172 10.632 13.172 7.49898C13.1716 4.36631 10.6319 1.82613 7.49915 1.82613ZM7.60071 6.00972C7.82862 6.05627 8.0001 6.25829 8.00012 6.49995V9.99995H9.00012V11H6.00012V9.99995H7.00012V6.99995H6.00012V5.99995H7.50012L7.60071 6.00972ZM7.50012 3.74995C7.91423 3.75006 8.2501 4.08583 8.25012 4.49995C8.25012 4.9141 7.91424 5.24985 7.50012 5.24995C7.08591 5.24995 6.75012 4.91417 6.75012 4.49995C6.75015 4.08576 7.08592 3.74995 7.50012 3.74995Z"
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
