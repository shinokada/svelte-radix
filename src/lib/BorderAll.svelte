<script lang="ts">
  export let size = '15';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'border all';
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
    d="M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V14C14.75 14.4142 14.4142 14.75 14 14.75H1C0.585786 14.75 0.25 14.4142 0.25 14V1ZM1.75 1.75V13.25H13.25V1.75H1.75Z"
  />
  <rect x="7" y="5" width={size} height={size} rx=".5" />
  <rect x="7" y="3" width={size} height={size} rx=".5" />
  <rect x="7" y="7" width={size} height={size} rx=".5" />
  <rect x="5" y="7" width={size} height={size} rx=".5" />
  <rect x="3" y="7" width={size} height={size} rx=".5" />
  <rect x="9" y="7" width={size} height={size} rx=".5" />
  <rect x="11" y="7" width={size} height={size} rx=".5" />
  <rect x="7" y="9" width={size} height={size} rx=".5" />
  <rect x="7" y="11" width={size} height={size} rx=".5" />
</svg>

<!--
@component
[Go to docs](https://svelte-radix.vercel.app/)
## Props
@prop export let size = '15';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'border all';
-->
