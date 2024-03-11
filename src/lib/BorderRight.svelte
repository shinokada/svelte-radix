<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'border right,';
  export let withEvents = false;
</script>

{#if withEvents}
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
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z"
      fill="currentColor"
    /> <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 5)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 5)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 3)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 3)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 9)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 9)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 11)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 11)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 1)" fill="currentColor" />
  </svg>
{:else}
  <svg
    width={size}
    height={size}
    {...$$restProps}
    {role}
    aria-label={ariaLabel}
    viewBox="0 0 15 15"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z"
      fill="currentColor"
    /> <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 5)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 5)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 3)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 3)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 9)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 9)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 11)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 11)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 7)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 13)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 1)" fill="currentColor" />
    <rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 1)" fill="currentColor" />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'border right,';
@prop export let withEvents = false;
-->
