<script lang="ts">
  import { getContext } from 'svelte';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps {
    size?: string;
    role?: string;
    color?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    withEvents = ctx.withEvents || false,
    title,
    desc,
    class: classname,
    ariaLabel = 'border top',
    onclick,
    onkeydown,
    onkeyup,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 15 15"
    {onclick}
    {onkeydown}
    {onkeyup}
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.75L1 1.75L1 0.249999L14 0.25L14 1.75Z" />
    <rect x="8" y="10" width="1" height="1" rx=".5" transform="rotate(-180 8 10)" />
    <rect x="2" y="10" width="1" height="1" rx=".5" transform="rotate(-180 2 10)" />
    <rect x="8" y="12" width="1" height="1" rx=".5" transform="rotate(-180 8 12)" />
    <rect x="2" y="12" width="1" height="1" rx=".5" transform="rotate(-180 2 12)" />
    <rect x="8" y="8" width="1" height="1" rx=".5" transform="rotate(-180 8 8)" />
    <rect x="8" y="14" width="1" height="1" rx=".5" transform="rotate(-180 8 14)" />
    <rect x="2" y="8" width="1" height="1" rx=".5" transform="rotate(-180 2 8)" />
    <rect x="2" y="14" width="1" height="1" rx=".5" transform="rotate(-180 2 14)" />
    <rect x="10" y="8" width="1" height="1" rx=".5" transform="rotate(-180 10 8)" />
    <rect x="10" y="14" width="1" height="1" rx=".5" transform="rotate(-180 10 14)" />
    <rect x="12" y="8" width="1" height="1" rx=".5" transform="rotate(-180 12 8)" />
    <rect x="12" y="14" width="1" height="1" rx=".5" transform="rotate(-180 12 14)" />
    <rect x="6" y="8" width="1" height="1" rx=".5" transform="rotate(-180 6 8)" />
    <rect x="6" y="14" width="1" height="1" rx=".5" transform="rotate(-180 6 14)" />
    <rect x="4" y="8" width="1" height="1" rx=".5" transform="rotate(-180 4 8)" />
    <rect x="4" y="14" width="1" height="1" rx=".5" transform="rotate(-180 4 14)" />
    <rect x="8" y="6" width="1" height="1" rx=".5" transform="rotate(-180 8 6)" />
    <rect x="2" y="6" width="1" height="1" rx=".5" transform="rotate(-180 2 6)" />
    <rect x="8" y="4" width="1" height="1" rx=".5" transform="rotate(-180 8 4)" />
    <rect x="2" y="4" width="1" height="1" rx=".5" transform="rotate(-180 2 4)" />
    <rect x="14" y="10" width="1" height="1" rx=".5" transform="rotate(-180 14 10)" />
    <rect x="14" y="12" width="1" height="1" rx=".5" transform="rotate(-180 14 12)" />
    <rect x="14" y="8" width="1" height="1" rx=".5" transform="rotate(-180 14 8)" />
    <rect x="14" y="14" width="1" height="1" rx=".5" transform="rotate(-180 14 14)" />
    <rect x="14" y="6" width="1" height="1" rx=".5" transform="rotate(-180 14 6)" />
    <rect x="14" y="4" width="1" height="1" rx=".5" transform="rotate(-180 14 4)" />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.75L1 1.75L1 0.249999L14 0.25L14 1.75Z" />
    <rect x="8" y="10" width="1" height="1" rx=".5" transform="rotate(-180 8 10)" />
    <rect x="2" y="10" width="1" height="1" rx=".5" transform="rotate(-180 2 10)" />
    <rect x="8" y="12" width="1" height="1" rx=".5" transform="rotate(-180 8 12)" />
    <rect x="2" y="12" width="1" height="1" rx=".5" transform="rotate(-180 2 12)" />
    <rect x="8" y="8" width="1" height="1" rx=".5" transform="rotate(-180 8 8)" />
    <rect x="8" y="14" width="1" height="1" rx=".5" transform="rotate(-180 8 14)" />
    <rect x="2" y="8" width="1" height="1" rx=".5" transform="rotate(-180 2 8)" />
    <rect x="2" y="14" width="1" height="1" rx=".5" transform="rotate(-180 2 14)" />
    <rect x="10" y="8" width="1" height="1" rx=".5" transform="rotate(-180 10 8)" />
    <rect x="10" y="14" width="1" height="1" rx=".5" transform="rotate(-180 10 14)" />
    <rect x="12" y="8" width="1" height="1" rx=".5" transform="rotate(-180 12 8)" />
    <rect x="12" y="14" width="1" height="1" rx=".5" transform="rotate(-180 12 14)" />
    <rect x="6" y="8" width="1" height="1" rx=".5" transform="rotate(-180 6 8)" />
    <rect x="6" y="14" width="1" height="1" rx=".5" transform="rotate(-180 6 14)" />
    <rect x="4" y="8" width="1" height="1" rx=".5" transform="rotate(-180 4 8)" />
    <rect x="4" y="14" width="1" height="1" rx=".5" transform="rotate(-180 4 14)" />
    <rect x="8" y="6" width="1" height="1" rx=".5" transform="rotate(-180 8 6)" />
    <rect x="2" y="6" width="1" height="1" rx=".5" transform="rotate(-180 2 6)" />
    <rect x="8" y="4" width="1" height="1" rx=".5" transform="rotate(-180 8 4)" />
    <rect x="2" y="4" width="1" height="1" rx=".5" transform="rotate(-180 2 4)" />
    <rect x="14" y="10" width="1" height="1" rx=".5" transform="rotate(-180 14 10)" />
    <rect x="14" y="12" width="1" height="1" rx=".5" transform="rotate(-180 14 12)" />
    <rect x="14" y="8" width="1" height="1" rx=".5" transform="rotate(-180 14 8)" />
    <rect x="14" y="14" width="1" height="1" rx=".5" transform="rotate(-180 14 14)" />
    <rect x="14" y="6" width="1" height="1" rx=".5" transform="rotate(-180 14 6)" />
    <rect x="14" y="4" width="1" height="1" rx=".5" transform="rotate(-180 14 4)" />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@props: 
-->
