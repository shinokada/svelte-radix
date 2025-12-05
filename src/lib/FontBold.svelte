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
    d="M9.02832 3C10.1371 3 11.0537 3.98152 11.0537 5.18457C11.0537 6.08498 10.6035 6.81887 9.70312 7.23633C10.8656 7.44882 11.5176 8.62804 11.5176 9.48145C11.5175 10.5126 10.9901 12 9.27734 12H5.10547C4.70868 12 4.42388 11.9121 4.25195 11.7363C4.08417 11.5563 4.00002 11.2716 4 10.8828V4.11719C4.00002 3.72026 4.08594 3.43555 4.25781 3.26367C4.43381 3.08778 4.71676 3 5.10547 3H9.02832ZM5.7998 10.6309H8.37891C8.89999 10.6309 9.62985 10.1211 9.62988 9.29883C9.62988 8.47649 8.9 8.00293 8.37891 8.00293H5.7998V10.6309ZM5.7998 6.69531H8.17969C8.53906 6.69531 9.27734 6.35938 9.27734 5.5C9.27733 4.64064 8.48047 4.36914 8.17969 4.36914H5.7998V6.69531Z"
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
