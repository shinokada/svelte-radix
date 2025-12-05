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
    d="M7.49908 0.87706C11.1565 0.87706 14.1217 3.84179 14.1221 7.49913C14.1221 11.1568 11.1567 14.1222 7.49908 14.1222C3.84175 14.1218 0.877014 11.1565 0.877014 7.49913C0.877426 3.84205 3.842 0.877471 7.49908 0.87706ZM7.49908 1.82628C4.36667 1.82669 1.82664 4.36672 1.82623 7.49913C1.82623 10.6319 4.36642 13.1716 7.49908 13.172C10.6321 13.172 13.1719 10.6321 13.1719 7.49913C13.1715 4.36647 10.6318 1.82628 7.49908 1.82628ZM7.50006 5.50011C8.6046 5.50014 9.50006 6.39556 9.50006 7.50011C9.50001 8.60461 8.60457 9.50007 7.50006 9.50011C6.39552 9.50011 5.50011 8.60463 5.50006 7.50011C5.50006 6.39554 6.39549 5.50011 7.50006 5.50011Z"
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
