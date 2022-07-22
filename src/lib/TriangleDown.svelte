<script lang="ts">
  export let size = '15';
  export let color = 'currentColor';
  export let ariaLabel = 'triangle down';
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
  <path d="M4 6H11L7.5 10.5L4 6Z" />
</svg>
