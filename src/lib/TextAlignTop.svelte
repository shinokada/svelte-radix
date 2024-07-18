<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'text align top',
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
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3.89949 9.49998C3.89949 9.72089 3.7204 9.89997 3.49949 9.89997C3.27857 9.89997 3.09949 9.72089 3.09949 9.49998L3.09949 2.46566L1.78233 3.78282C1.62612 3.93903 1.37285 3.93903 1.21664 3.78282C1.06043 3.62661 1.06043 3.37334 1.21664 3.21713L3.21664 1.21713C3.29166 1.14212 3.3934 1.09998 3.49949 1.09998C3.60557 1.09998 3.70732 1.14212 3.78233 1.21713L5.78233 3.21713C5.93854 3.37334 5.93854 3.62661 5.78233 3.78282C5.62612 3.93903 5.37285 3.93903 5.21664 3.78282L3.89949 2.46566L3.89949 9.49998ZM8.49998 1.99998C8.22383 1.99998 7.99998 2.22383 7.99998 2.49998C7.99998 2.77612 8.22383 2.99998 8.49998 2.99998H14.5C14.7761 2.99998 15 2.77612 15 2.49998C15 2.22383 14.7761 1.99998 14.5 1.99998H8.49998ZM8.49998 4.99998C8.22383 4.99998 7.99998 5.22383 7.99998 5.49998C7.99998 5.77612 8.22383 5.99998 8.49998 5.99998H14.5C14.7761 5.99998 15 5.77612 15 5.49998C15 5.22383 14.7761 4.99998 14.5 4.99998H8.49998ZM7.99998 8.49998C7.99998 8.22383 8.22383 7.99998 8.49998 7.99998H14.5C14.7761 7.99998 15 8.22383 15 8.49998C15 8.77612 14.7761 8.99998 14.5 8.99998H8.49998C8.22383 8.99998 7.99998 8.77612 7.99998 8.49998Z"
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
@prop ariaLabel = 'text align top'
@prop ...restProps
-->
