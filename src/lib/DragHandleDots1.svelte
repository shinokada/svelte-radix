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
    ariaLabel = 'drag handle dots 1',
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
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@props: 
-->
