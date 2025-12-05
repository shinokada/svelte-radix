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
    d="M10.5003 2.75C10.7763 2.75018 11.0003 2.97397 11.0003 3.25V7.09961H12.5003L12.5814 7.1084C12.7632 7.14602 12.9007 7.30701 12.9007 7.5C12.9007 7.693 12.7632 7.85397 12.5814 7.8916L12.5003 7.90039H11.0003V8.5498C11.0003 10.4827 9.43315 12.0496 7.50031 12.0498C5.56731 12.0498 4.00031 10.4828 4.00031 8.5498V7.90039H2.50031C2.27939 7.90039 2.09991 7.72091 2.09991 7.5C2.09993 7.2791 2.2794 7.09961 2.50031 7.09961H4.00031V3.25C4.00031 2.97386 4.22416 2.75 4.50031 2.75C4.77629 2.75018 5.00031 2.97397 5.00031 3.25V7.09961H10.0003V3.25C10.0003 2.97386 10.2242 2.75 10.5003 2.75ZM5.00031 7.90039V8.5498C5.00031 9.93052 6.11959 11.0498 7.50031 11.0498C8.88086 11.0496 10.0003 9.9304 10.0003 8.5498V7.90039H5.00031Z"
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
