<script lang="ts">
  import type { ComponentType } from 'svelte';
  interface Props {
    icon: ComponentType;
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {
    icon,
    size = '24',
    role = 'img',
    ariaLabel = 'Icon',
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svelte:component
  this={icon}
  {...restProps}
  {role}
  {size}
  class={classname}
  aria-label={ariaLabel}
/>

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@props: icon: ComponentType;
@props:size?:  string; = '24';
@props:role?:  string; = 'img';
@props:ariaLabel?:  string; = 'Icon';
@props:class?: string;
-->
