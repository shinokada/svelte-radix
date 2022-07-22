<script lang="ts">
  export let size = '15';
  export let color = 'currentColor';
  export let ariaLabel = 'drag handle dots 1';
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
