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

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@prop Icon
@prop size = '24'
@prop color = 'currentColor'
@prop role = 'img'
@prop ariaLabel = 'Icon'
@prop ...restProps
-->
