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
    d="M7.7478 10.8757C7.59795 10.9748 7.40156 10.9749 7.25171 10.8757L7.1814 10.8181L3.9314 7.56811C3.75592 7.39236 3.75575 7.10704 3.9314 6.9314C4.10705 6.75584 4.39239 6.75595 4.56812 6.9314L7.04956 9.41284L7.04956 1.49976C7.04969 1.25139 7.25138 1.04965 7.49976 1.04956C7.74821 1.04956 7.94983 1.25133 7.94995 1.49976L7.94995 9.41284L10.4314 6.9314L10.5017 6.87378C10.6763 6.75837 10.9143 6.77781 11.0681 6.9314C11.2219 7.08519 11.2411 7.32313 11.1257 7.4978L11.0681 7.56811L7.81812 10.8181L7.7478 10.8757ZM1.49976 13.95C1.25132 13.9498 1.04956 13.7482 1.04956 13.4998C1.04967 13.2514 1.25138 13.0497 1.49976 13.0496L13.4998 13.0496C13.7482 13.0496 13.9498 13.2513 13.95 13.4998C13.95 13.7483 13.7483 13.95 13.4998 13.95L1.49976 13.95Z"
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
