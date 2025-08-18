<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		color = ctx.color || 'currentColor',
		title,
		desc,
		ariaLabel = 'space between horizontally',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
	{role}
	width={size}
	height={size}
	fill={color}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	viewBox="0 0 15 15"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M14.4999 0.999994C14.2237 0.999994 13.9999 1.22385 13.9999 1.49999L13.9999 5.99995L9.99992 5.99995C9.44764 5.99995 8.99993 6.44766 8.99993 6.99994L8.99993 7.99994C8.99993 8.55222 9.44764 8.99993 9.99992 8.99993L13.9999 8.99993L13.9999 13.4999C13.9999 13.776 14.2237 13.9999 14.4999 13.9999C14.776 13.9999 14.9999 13.776 14.9999 13.4999L14.9999 1.49999C14.9999 1.22385 14.776 0.999994 14.4999 0.999994ZM4.99996 5.99995L0.999992 5.99995L0.999992 1.49999C0.999992 1.22385 0.776136 0.999994 0.499996 0.999994C0.223856 0.999994 -9.7852e-09 1.22385 -2.18557e-08 1.49999L4.07279e-07 13.4999C3.95208e-07 13.776 0.223855 13.9999 0.499996 13.9999C0.776136 13.9999 0.999992 13.776 0.999992 13.4999L0.999992 8.99993L4.99996 8.99993C5.55224 8.99993 5.99995 8.55222 5.99995 7.99993L5.99995 6.99994C5.99995 6.44766 5.55224 5.99995 4.99996 5.99995Z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop ariaLabel = 'space between horizontally'
@prop ...restProps
-->
