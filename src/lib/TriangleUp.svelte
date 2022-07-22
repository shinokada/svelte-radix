<script lang="ts">
  export let size = '15';
  export let color = 'currentColor';
  export let ariaLabel = 'triangle up';
</script>

<svg
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  viewBox="0 0 15 15"
  fill={color}
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M4 9H11L7.5 4.5L4 9Z" />
</svg>
