<script lang="ts">
  export let size = '15';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'triangle right';
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
  <path d="M6 11L6 4L10.5 7.5L6 11Z" />
</svg>

<!--
@component
[Go to docs](https://svelte-radix.vercel.app/)
## Props
@prop export let size = '15';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'triangle right';
-->
