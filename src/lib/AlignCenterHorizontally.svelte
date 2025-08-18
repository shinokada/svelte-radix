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
		ariaLabel = 'align center horizontally',
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
		d="M1.99988 6C1.44759 6 0.999877 6.44772 0.999877 7L0.999877 8C0.999877 8.55228 1.44759 9 1.99988 9L6.99988 9L6.99988 13.5C6.99988 13.7761 7.22374 14 7.49988 14C7.77602 14 7.99988 13.7761 7.99988 13.5L7.99988 9L12.9999 9C13.5522 9 13.9999 8.55228 13.9999 8L13.9999 7C13.9999 6.44772 13.5522 6 12.9999 6L7.99988 6L7.99988 1.5C7.99988 1.22386 7.77602 1 7.49988 1C7.22373 1 6.99988 1.22386 6.99988 1.5L6.99988 6L1.99988 6Z"
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
@prop ariaLabel = 'align center horizontally'
@prop ...restProps
-->
