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
    ariaLabel =  "corner top left" ,
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
       <path     fill-rule="evenodd"     clip-rule="evenodd"     d="M9.87737 3H9.9H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H9.9C8.77164 4 7.95545 4.00039 7.31352 4.05284C6.67744 4.10481 6.25662 4.20539 5.91103 4.38148C5.25247 4.71703 4.71703 5.25247 4.38148 5.91103C4.20539 6.25662 4.10481 6.67744 4.05284 7.31352C4.00039 7.95545 4 8.77164 4 9.9V11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5V9.9V9.87737C3 8.77641 3 7.91948 3.05616 7.23209C3.11318 6.53416 3.23058 5.9671 3.49047 5.45704C3.9219 4.61031 4.61031 3.9219 5.45704 3.49047C5.9671 3.23058 6.53416 3.11318 7.23209 3.05616C7.91948 3 8.77641 3 9.87737 3Z"        />  
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
@prop ariaLabel =  "corner top left"
@prop ...restProps
-->
