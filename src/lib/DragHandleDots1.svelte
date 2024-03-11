<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'drag handle dots 1,';
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
    <circle cx="4.5" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="12.498" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="12.498" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="12.498" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="12.498" r=".6" fill="currentColor" />
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
    <circle cx="4.5" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="4.5" cy="12.498" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="6.5" cy="12.498" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="8.499" cy="12.498" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="2.5" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="4.5" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="6.499" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="8.499" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="10.498" r=".6" fill="currentColor" />
    <circle cx="10.499" cy="12.498" r=".6" fill="currentColor" />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'drag handle dots 1,';
@prop export let withEvents = false;
-->
