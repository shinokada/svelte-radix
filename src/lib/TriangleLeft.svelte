<script lang="ts">
  export let size = '15';
  export let color = 'currentColor';
  export let ariaLabel = 'triangle left';
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
  <path d="M9 4L9 11L4.5 7.5L9 4Z" />
</svg>
