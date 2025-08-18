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
		ariaLabel = 'border bottom',
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
	<path fill-rule="evenodd" clip-rule="evenodd" d="M1 13.25L14 13.25V14.75L1 14.75V13.25Z" />
	<rect x="7" y="5" width="1" height="1" rx=".5" />
	<rect x="13" y="5" width="1" height="1" rx=".5" />
	<rect x="7" y="3" width="1" height="1" rx=".5" />
	<rect x="13" y="3" width="1" height="1" rx=".5" />
	<rect x="7" y="7" width="1" height="1" rx=".5" />
	<rect x="7" y="1" width="1" height="1" rx=".5" />
	<rect x="13" y="7" width="1" height="1" rx=".5" />
	<rect x="13" y="1" width="1" height="1" rx=".5" />
	<rect x="5" y="7" width="1" height="1" rx=".5" />
	<rect x="5" y="1" width="1" height="1" rx=".5" />
	<rect x="3" y="7" width="1" height="1" rx=".5" />
	<rect x="3" y="1" width="1" height="1" rx=".5" />
	<rect x="9" y="7" width="1" height="1" rx=".5" />
	<rect x="9" y="1" width="1" height="1" rx=".5" />
	<rect x="11" y="7" width="1" height="1" rx=".5" />
	<rect x="11" y="1" width="1" height="1" rx=".5" />
	<rect x="7" y="9" width="1" height="1" rx=".5" />
	<rect x="13" y="9" width="1" height="1" rx=".5" />
	<rect x="7" y="11" width="1" height="1" rx=".5" />
	<rect x="13" y="11" width="1" height="1" rx=".5" />
	<rect x="1" y="5" width="1" height="1" rx=".5" />
	<rect x="1" y="3" width="1" height="1" rx=".5" />
	<rect x="1" y="7" width="1" height="1" rx=".5" />
	<rect x="1" y="1" width="1" height="1" rx=".5" />
	<rect x="1" y="9" width="1" height="1" rx=".5" />
	<rect x="1" y="11" width="1" height="1" rx=".5" />
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
@prop ariaLabel = 'border bottom'
@prop ...restProps
-->
