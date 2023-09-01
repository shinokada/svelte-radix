<script lang="ts">
  export let size = '15';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'align top';
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
    d="M1.5 0C1.22386 0 1 0.223858 1 0.5C1 0.776142 1.22386 1 1.5 1H6V12C6 12.5523 6.44772 13 7 13H8C8.55228 13 9 12.5523 9 12V1H13.5C13.7761 1 14 0.776142 14 0.5C14 0.223858 13.7761 0 13.5 0H9H6H1.5Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-radix.vercel.app/)
## Props
@prop export let size = '15';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let ariaLabel = 'align top';
-->
