<script lang="ts">
  export let size = '15';
  export let color = 'currentColor';
  export let ariaLabel = 'border bottom';
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
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 13.25L14 13.25V14.75L1 14.75V13.25Z" />
  <rect x="7" y="5" width={size} height={size} rx=".5" />
  <rect x="13" y="5" width={size} height={size} rx=".5" />
  <rect x="7" y="3" width={size} height={size} rx=".5" />
  <rect x="13" y="3" width={size} height={size} rx=".5" />
  <rect x="7" y="7" width={size} height={size} rx=".5" />
  <rect x="7" y="1" width={size} height={size} rx=".5" />
  <rect x="13" y="7" width={size} height={size} rx=".5" />
  <rect x="13" y="1" width={size} height={size} rx=".5" />
  <rect x="5" y="7" width={size} height={size} rx=".5" />
  <rect x="5" y="1" width={size} height={size} rx=".5" />
  <rect x="3" y="7" width={size} height={size} rx=".5" />
  <rect x="3" y="1" width={size} height={size} rx=".5" />
  <rect x="9" y="7" width={size} height={size} rx=".5" />
  <rect x="9" y="1" width={size} height={size} rx=".5" />
  <rect x="11" y="7" width={size} height={size} rx=".5" />
  <rect x="11" y="1" width={size} height={size} rx=".5" />
  <rect x="7" y="9" width={size} height={size} rx=".5" />
  <rect x="13" y="9" width={size} height={size} rx=".5" />
  <rect x="7" y="11" width={size} height={size} rx=".5" />
  <rect x="13" y="11" width={size} height={size} rx=".5" />
  <rect x="1" y="5" width={size} height={size} rx=".5" />
  <rect x="1" y="3" width={size} height={size} rx=".5" />
  <rect x="1" y="7" width={size} height={size} rx=".5" />
  <rect x="1" y="1" width={size} height={size} rx=".5" />
  <rect x="1" y="9" width={size} height={size} rx=".5" />
  <rect x="1" y="11" width={size} height={size} rx=".5" />
</svg>
