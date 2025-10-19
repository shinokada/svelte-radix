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
    d="M7.50208 0.877045C11.1606 0.877256 14.1269 3.84347 14.1271 7.50204C14.1269 11.1606 11.1606 14.1268 7.50208 14.127C3.8435 14.1268 0.877286 11.1606 0.877075 7.50204C0.877285 3.84347 3.8435 0.877256 7.50208 0.877045ZM8.00012 4.50009C8.00007 4.77616 7.77619 5.00004 7.50012 5.00009C7.22401 5.00009 7.00017 4.77619 7.00012 4.50009V1.8497C4.26672 2.08955 2.08958 4.26669 1.84973 7.00009H4.50012C4.77622 7.00014 5.00012 7.22398 5.00012 7.50009C5.00007 7.77616 4.77619 8.00004 4.50012 8.00009H1.84973C2.08769 10.7354 4.26533 12.9135 7.00012 13.1534V10.5001C7.00012 10.2239 7.22398 10.0001 7.50012 10.0001C7.77622 10.0001 8.00012 10.224 8.00012 10.5001V13.1534C10.7368 12.9153 12.9164 10.7368 13.1544 8.00009H10.5001C10.224 8.00009 10.0002 7.77619 10.0001 7.50009C10.0001 7.22395 10.224 7.00009 10.5001 7.00009H13.1534C12.9135 4.26527 10.7355 2.08665 8.00012 1.84872V4.50009Z"
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
