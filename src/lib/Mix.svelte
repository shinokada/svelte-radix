<script lang='ts'>
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types'
  
  const ctx: CtxType = getContext('iconCtx') ?? {};

  let { 
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel =  "mix" ,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 15 15"
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
       <path     fill-rule="evenodd"     clip-rule="evenodd"     d="M2.14921 3.99996C2.14921 2.97778 2.97784 2.14915 4.00002 2.14915C5.02219 2.14915 5.85083 2.97778 5.85083 3.99996C5.85083 5.02213 5.02219 5.85077 4.00002 5.85077C2.97784 5.85077 2.14921 5.02213 2.14921 3.99996ZM4.00002 1.24915C2.48079 1.24915 1.24921 2.48073 1.24921 3.99996C1.24921 5.51919 2.48079 6.75077 4.00002 6.75077C5.51925 6.75077 6.75083 5.51919 6.75083 3.99996C6.75083 2.48073 5.51925 1.24915 4.00002 1.24915ZM5.82034 11.0001L2.49998 12.8369V9.16331L5.82034 11.0001ZM2.63883 8.21159C2.17228 7.9535 1.59998 8.29093 1.59998 8.82411V13.1761C1.59998 13.7093 2.17228 14.0467 2.63883 13.7886L6.57235 11.6126C7.05389 11.3462 7.05389 10.654 6.57235 10.3876L2.63883 8.21159ZM8.30001 9.00003C8.30001 8.61343 8.61341 8.30003 9.00001 8.30003H13C13.3866 8.30003 13.7 8.61343 13.7 9.00003V13C13.7 13.3866 13.3866 13.7 13 13.7H9.00001C8.61341 13.7 8.30001 13.3866 8.30001 13V9.00003ZM9.20001 9.20003V12.8H12.8V9.20003H9.20001ZM13.4432 2.19311C13.6189 2.01737 13.6189 1.73245 13.4432 1.55671C13.2675 1.38098 12.9826 1.38098 12.8068 1.55671L11 3.36353L9.19321 1.55674C9.01748 1.381 8.73255 1.381 8.55682 1.55674C8.38108 1.73247 8.38108 2.0174 8.55682 2.19313L10.3636 3.99992L8.55682 5.80671C8.38108 5.98245 8.38108 6.26737 8.55682 6.44311C8.73255 6.61885 9.01748 6.61885 9.19321 6.44311L11 4.63632L12.8068 6.44314C12.9826 6.61887 13.2675 6.61887 13.4432 6.44314C13.6189 6.2674 13.6189 5.98247 13.4432 5.80674L11.6364 3.99992L13.4432 2.19311Z"        />  
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
@prop ariaLabel =  "mix"
@prop ...restProps
-->
