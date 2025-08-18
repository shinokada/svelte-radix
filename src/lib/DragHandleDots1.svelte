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
		ariaLabel = 'drag handle dots 1',
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
	<circle cx="4.5" cy="2.5" r=".6" /> <circle cx="4.5" cy="4.5" r=".6" />
	<circle cx="4.5" cy="6.499" r=".6" /> <circle cx="4.5" cy="8.499" r=".6" />
	<circle cx="4.5" cy="10.498" r=".6" /> <circle cx="4.5" cy="12.498" r=".6" />
	<circle cx="6.5" cy="2.5" r=".6" /> <circle cx="6.5" cy="4.5" r=".6" />
	<circle cx="6.5" cy="6.499" r=".6" /> <circle cx="6.5" cy="8.499" r=".6" />
	<circle cx="6.5" cy="10.498" r=".6" /> <circle cx="6.5" cy="12.498" r=".6" />
	<circle cx="8.499" cy="2.5" r=".6" /> <circle cx="8.499" cy="4.5" r=".6" />
	<circle cx="8.499" cy="6.499" r=".6" /> <circle cx="8.499" cy="8.499" r=".6" />
	<circle cx="8.499" cy="10.498" r=".6" /> <circle cx="8.499" cy="12.498" r=".6" />
	<circle cx="10.499" cy="2.5" r=".6" /> <circle cx="10.499" cy="4.5" r=".6" />
	<circle cx="10.499" cy="6.499" r=".6" /> <circle cx="10.499" cy="8.499" r=".6" />
	<circle cx="10.499" cy="10.498" r=".6" /> <circle cx="10.499" cy="12.498" r=".6" />
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
@prop ariaLabel = 'drag handle dots 1'
@prop ...restProps
-->
