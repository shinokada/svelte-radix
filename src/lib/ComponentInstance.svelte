<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'component instance,';
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
      d="M7.1465 1.48959C7.34176 1.29432 7.65835 1.29432 7.85361 1.48959L13.5105 7.14644C13.7057 7.3417 13.7057 7.65829 13.5105 7.85355L7.85361 13.5104C7.65835 13.7057 7.34176 13.7057 7.1465 13.5104L1.48965 7.85355C1.29439 7.65829 1.29439 7.3417 1.48965 7.14644L7.1465 1.48959ZM7.50005 2.55025L2.55031 7.49999L7.50005 12.4497L12.4498 7.49999L7.50005 2.55025Z"
      fill="currentColor"
    />
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
      d="M7.1465 1.48959C7.34176 1.29432 7.65835 1.29432 7.85361 1.48959L13.5105 7.14644C13.7057 7.3417 13.7057 7.65829 13.5105 7.85355L7.85361 13.5104C7.65835 13.7057 7.34176 13.7057 7.1465 13.5104L1.48965 7.85355C1.29439 7.65829 1.29439 7.3417 1.48965 7.14644L7.1465 1.48959ZM7.50005 2.55025L2.55031 7.49999L7.50005 12.4497L12.4498 7.49999L7.50005 2.55025Z"
      fill="currentColor"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'component instance,';
@prop export let withEvents = false;
-->
