<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'border right';
</script>

<svg
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 15 15"
  fill={color}
  xmlns="http://www.w3.org/2000/svg"
>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 5 7)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 5 13)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 3 7)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 3 13)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 7 7)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 1 7)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 7 13)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 1 13)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 7 5)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 1 5)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 7 3)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 1 3)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 7 9)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 1 9)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 7 11)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 1 11)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 9 7)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 9 13)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 11 7)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 11 13)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 5 1)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 3 1)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 7 1)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 1 1)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 9 1)" />
  <rect width={size} height={size} rx=".5" transform="matrix(0 1 1 0 11 1)" />
</svg>

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'border right';
-->
