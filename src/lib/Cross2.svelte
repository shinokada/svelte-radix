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
    d="M10.9688 3.21871C11.1933 2.99416 11.5567 2.99416 11.7813 3.21871C12.0056 3.44328 12.0057 3.80673 11.7813 4.03121L8.31251 7.49996L11.7813 10.9687L11.8555 11.0586C12.0026 11.2817 11.9777 11.5848 11.7813 11.7812C11.5849 11.9776 11.2818 12.0026 11.0586 11.8554L10.9688 11.7812L7.50001 8.31246L4.03126 11.7812C3.80677 12.0057 3.44332 12.0056 3.21876 11.7812C2.99421 11.5567 2.99421 11.1933 3.21876 10.9687L6.68751 7.49996L3.21876 4.03121L3.14454 3.94137C2.99723 3.71819 3.0223 3.41517 3.21876 3.21871C3.41522 3.02225 3.71823 2.99719 3.94141 3.14449L4.03126 3.21871L7.50001 6.68746L10.9688 3.21871Z"
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
