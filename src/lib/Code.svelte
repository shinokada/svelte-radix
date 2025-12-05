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
    d="M9.03606 2.31408C9.13865 2.05778 9.42913 1.93325 9.68548 2.03576C9.94183 2.1383 10.0663 2.42881 9.9638 2.68517L5.9638 12.6852C5.86124 12.9416 5.57077 13.066 5.31438 12.9635C5.05802 12.8609 4.93351 12.5705 5.03606 12.3141L9.03606 2.31408ZM11.1464 5.14611C11.3173 4.97532 11.5813 4.95355 11.7753 5.08166L11.8534 5.14611L13.8534 7.14611L13.9179 7.22423C14.046 7.41829 14.0242 7.68227 13.8534 7.85314L11.8534 9.85314C11.6582 10.0484 11.3417 10.0484 11.1464 9.85314C10.9512 9.65787 10.9512 9.34135 11.1464 9.14611L12.7929 7.49962L11.1464 5.85314L11.082 5.77501C10.9539 5.58094 10.9756 5.31695 11.1464 5.14611ZM3.14641 5.14611C3.34166 4.95094 3.6582 4.95094 3.85344 5.14611C4.04868 5.34135 4.04864 5.65787 3.85344 5.85314L2.20696 7.49962L3.85344 9.14611L3.9179 9.22423C4.04605 9.41829 4.02425 9.68227 3.85344 9.85314C3.68258 10.024 3.41862 10.0458 3.22454 9.91759L3.14641 9.85314L1.14641 7.85314C0.951218 7.65787 0.951173 7.34135 1.14641 7.14611L3.14641 5.14611Z"
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
