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
    d="M12.5 10.0002C12.7761 10.0002 13 10.224 13 10.5002V12.0002C12.9999 13.1042 12.106 14.0002 11.001 14.0002H3.99609C2.89012 14 2.0001 13.103 2 12.0002V10.5002C2 10.224 2.22386 10.0002 2.5 10.0002C2.77614 10.0002 3 10.224 3 10.5002V12.0002C3.0001 12.5539 3.44557 13 3.99609 13.0002H11.001C11.5527 13.0002 11.9999 12.5529 12 12.0002V10.5002C12 10.224 12.2239 10.0002 12.5 10.0002ZM7.5 1.04999C7.74853 1.04999 7.9502 1.25165 7.9502 1.50018V8.41327L10.1816 6.18182C10.3574 6.00609 10.6426 6.00609 10.8184 6.18182C10.994 6.35757 10.9941 6.64283 10.8184 6.81854L7.81836 9.81854C7.64264 9.99413 7.35734 9.99416 7.18164 9.81854L4.18164 6.81854C4.00595 6.64285 4.00603 6.35757 4.18164 6.18182C4.35738 6.00609 4.64262 6.00609 4.81836 6.18182L7.0498 8.41327V1.50018C7.0498 1.25167 7.25149 1.05001 7.5 1.04999Z"
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
