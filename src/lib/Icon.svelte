<script lang="ts">
  import type { Component } from 'svelte';
  import type { Props } from './types';

  interface IconProps extends Props {
    Icon: Component;
  }

  let {
    Icon,
    size = '24',
    color = 'currentColor',
    role = 'img',
    ariaLabel = 'Icon',
    ...restProps
  }: IconProps = $props();
</script>

<Icon {...restProps} {role} {size} {color} {ariaLabel} />
