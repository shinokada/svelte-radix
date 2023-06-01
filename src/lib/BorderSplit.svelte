<script lang="ts">
  export let size = '15';
  export let role = 'img';
  export let color = 'currentColor';
  export let ariaLabel = 'border split';
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
  <rect x="7" y="5.025" width={size} height={size} rx=".5" />
  <rect x="7" y="3.025" width={size} height={size} rx=".5" />
  <rect x="7" y="7.025" width={size} height={size} rx=".5" />
  <rect x="7" y="13.025" width={size} height={size} rx=".5" />
  <rect x="7" y="1.025" width={size} height={size} rx=".5" />
  <rect x="13" y="7.025" width={size} height={size} rx=".5" />
  <rect x="5" y="7.025" width={size} height={size} rx=".5" />
  <rect x="3" y="7.025" width={size} height={size} rx=".5" />
  <rect x="9" y="7.025" width={size} height={size} rx=".5" />
  <rect x="11" y="7.025" width={size} height={size} rx=".5" />
  <rect x="7" y="9.025" width={size} height={size} rx=".5" />
  <rect x="7" y="11.025" width={size} height={size} rx=".5" />
  <rect x="1" y="7.025" width={size} height={size} rx=".5" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M1 1.49994C1 1.2238 1.22386 0.999939 1.5 0.999939H6V1.99994H2V5.99994H1V1.49994ZM13 1.99994H9V0.999939H13.5C13.7761 0.999939 14 1.2238 14 1.49994V5.99994H13V1.99994ZM1 13.4999V8.99994H2V12.9999H6V13.9999H1.5C1.22386 13.9999 1 13.7761 1 13.4999ZM13 12.9999V8.99994H14V13.4999C14 13.7761 13.7761 13.9999 13.5 13.9999H9.5V12.9999H13Z"
  />
</svg>

<!--
@component
[Go to Document](https://svelte-radix.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
@prop color = 'currentColor';
@prop ariaLabel = 'icon file name';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
