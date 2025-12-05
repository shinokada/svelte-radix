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
    d="M0.627945 1.166C0.772731 1.00471 1.00504 0.954914 1.20314 1.04295L14.7031 7.04295C14.8837 7.1232 15 7.3024 15 7.49998C15 7.69758 14.8837 7.87676 14.7031 7.95702L1.20314 13.957C1.00503 14.0451 0.772733 13.9953 0.627945 13.834C0.483193 13.6724 0.459056 13.4354 0.568375 13.248L3.92091 7.49998L0.568375 1.75194C0.459065 1.56453 0.483186 1.3276 0.627945 1.166ZM4.84474 7.09959H9.00002L9.08107 7.10838C9.2631 7.14586 9.40039 7.30686 9.40041 7.49998C9.40041 7.69311 9.26311 7.8541 9.08107 7.89159L9.00002 7.90037H4.84474L2.21193 12.4131L13.2686 7.49998L2.21193 2.58592L4.84474 7.09959Z"
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
