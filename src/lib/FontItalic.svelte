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
    d="M10.6252 3.05018C10.8736 3.05028 11.0754 3.25191 11.0754 3.50037C11.0753 3.74875 10.8736 3.95047 10.6252 3.95057H9.00604L7.23065 11.0502H8.87518C9.12362 11.0503 9.32538 11.2519 9.32538 11.5004C9.32521 11.7487 9.12352 11.9495 8.87518 11.9496H4.37518C4.12676 11.9496 3.92516 11.7488 3.92499 11.5004C3.92499 11.2518 4.12665 11.0502 4.37518 11.0502H5.99432L7.76971 3.95057H6.12518C5.87672 3.95057 5.67509 3.74881 5.67499 3.50037C5.67499 3.25185 5.87665 3.05018 6.12518 3.05018H10.6252Z"
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
