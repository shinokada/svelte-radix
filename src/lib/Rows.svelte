<script lang="ts">
  export let size = '15';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'rows';
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
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.85002L1 8.85002L1 10.15L14 10.15L14 8.85002ZM1 4.85003L14 4.85003L14 6.15003L1 6.15002L1 4.85003ZM14 0.850025L1 0.850025L1 2.15002L14 2.15002L14 0.850025Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-radix.vercel.app/)
## Props
@prop export let size = '15';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'rows';
-->
