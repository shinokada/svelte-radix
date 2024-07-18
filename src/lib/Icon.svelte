<script lang="ts">
  import type { Component } from 'svelte';
  import type { Props } from './types';

  interface IconProps extends Props {
    icon: Component;
  }

  let { icon, size = '24', role = 'img', ariaLabel = 'Icon', ...restProps }: IconProps = $props();
</script>

<svelte:component this={icon} {...restProps} {role} {size} aria-label={ariaLabel} />

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@prop icon
@prop size = '24'
@prop role = 'img'
@prop ariaLabel = 'Icon'
@prop ...restProps
-->
