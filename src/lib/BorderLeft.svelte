<script lang="ts">
  export let size = '15';
  export let color = 'currentColor';
  export let ariaLabel = 'border left';
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
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 1L1.75 14L0.249999 14L0.25 1L1.75 1Z" />
  <rect x="10" y="7" width={size} height={size} rx=".5" transform="rotate(90 10 7)" />
  <rect x="10" y="13" width={size} height={size} rx=".5" transform="rotate(90 10 13)" />
  <rect x="12" y="7" width={size} height={size} rx=".5" transform="rotate(90 12 7)" />
  <rect x="12" y="13" width={size} height={size} rx=".5" transform="rotate(90 12 13)" />
  <rect x="8" y="7" width={size} height={size} rx=".5" transform="rotate(90 8 7)" />
  <rect x="14" y="7" width={size} height={size} rx=".5" transform="rotate(90 14 7)" />
  <rect x="8" y="13" width={size} height={size} rx=".5" transform="rotate(90 8 13)" />
  <rect x="14" y="13" width={size} height={size} rx=".5" transform="rotate(90 14 13)" />
  <rect x="8" y="5" width={size} height={size} rx=".5" transform="rotate(90 8 5)" />
  <rect x="14" y="5" width={size} height={size} rx=".5" transform="rotate(90 14 5)" />
  <rect x="8" y="3" width={size} height={size} rx=".5" transform="rotate(90 8 3)" />
  <rect x="14" y="3" width={size} height={size} rx=".5" transform="rotate(90 14 3)" />
  <rect x="8" y="9" width={size} height={size} rx=".5" transform="rotate(90 8 9)" />
  <rect x="14" y="9" width={size} height={size} rx=".5" transform="rotate(90 14 9)" />
  <rect x="8" y="11" width={size} height={size} rx=".5" transform="rotate(90 8 11)" />
  <rect x="14" y="11" width={size} height={size} rx=".5" transform="rotate(90 14 11)" />
  <rect x="6" y="7" width={size} height={size} rx=".5" transform="rotate(90 6 7)" />
  <rect x="6" y="13" width={size} height={size} rx=".5" transform="rotate(90 6 13)" />
  <rect x="4" y="7" width={size} height={size} rx=".5" transform="rotate(90 4 7)" />
  <rect x="4" y="13" width={size} height={size} rx=".5" transform="rotate(90 4 13)" />
  <rect x="10" y="1" width={size} height={size} rx=".5" transform="rotate(90 10 1)" />
  <rect x="12" y="1" width={size} height={size} rx=".5" transform="rotate(90 12 1)" />
  <rect x="8" y="1" width={size} height={size} rx=".5" transform="rotate(90 8 1)" />
  <rect x="14" y="1" width={size} height={size} rx=".5" transform="rotate(90 14 1)" />
  <rect x="6" y="1" width={size} height={size} rx=".5" transform="rotate(90 6 1)" />
  <rect x="4" y="1" width={size} height={size} rx=".5" transform="rotate(90 4 1)" />
</svg>
