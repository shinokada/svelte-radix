<script lang="ts">
  export let size = '15';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'drag handle dots 1';
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
  <circle cx="4.5" cy="2.5" r=".6" />
  <circle cx="4.5" cy="4.5" r=".6" />
  <circle cx="4.5" cy="6.499" r=".6" />
  <circle cx="4.5" cy="8.499" r=".6" />
  <circle cx="4.5" cy="10.498" r=".6" />
  <circle cx="4.5" cy="12.498" r=".6" />
  <circle cx="6.5" cy="2.5" r=".6" />
  <circle cx="6.5" cy="4.5" r=".6" />
  <circle cx="6.5" cy="6.499" r=".6" />
  <circle cx="6.5" cy="8.499" r=".6" />
  <circle cx="6.5" cy="10.498" r=".6" />
  <circle cx="6.5" cy="12.498" r=".6" />
  <circle cx="8.499" cy="2.5" r=".6" />
  <circle cx="8.499" cy="4.5" r=".6" />
  <circle cx="8.499" cy="6.499" r=".6" />
  <circle cx="8.499" cy="8.499" r=".6" />
  <circle cx="8.499" cy="10.498" r=".6" />
  <circle cx="8.499" cy="12.498" r=".6" />
  <circle cx="10.499" cy="2.5" r=".6" />
  <circle cx="10.499" cy="4.5" r=".6" />
  <circle cx="10.499" cy="6.499" r=".6" />
  <circle cx="10.499" cy="8.499" r=".6" />
  <circle cx="10.499" cy="10.498" r=".6" />
  <circle cx="10.499" cy="12.498" r=".6" />
</svg>

<!--
@component
[Go to docs](https://svelte-radix.vercel.app/)
## Props
@prop export let size = '15';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'drag handle dots 1';
-->
