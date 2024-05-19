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
    ariaLabel = 'align left',
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
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.499995 0.999995C0.223855 0.999995 -5.58458e-07 1.22385 -5.46388e-07 1.49999L-2.18554e-08 13.4999C-9.78492e-09 13.776 0.223855 13.9999 0.499995 13.9999C0.776136 13.9999 0.999991 13.776 0.999991 13.4999L0.999991 8.99993L12 8.99993C12.5523 8.99993 13 8.55222 13 7.99993L13 6.99994C13 6.44766 12.5523 5.99995 12 5.99995L0.999991 5.99995L0.999991 1.49999C0.999991 1.22385 0.776135 0.999995 0.499995 0.999995Z"
    />
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
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.499995 0.999995C0.223855 0.999995 -5.58458e-07 1.22385 -5.46388e-07 1.49999L-2.18554e-08 13.4999C-9.78492e-09 13.776 0.223855 13.9999 0.499995 13.9999C0.776136 13.9999 0.999991 13.776 0.999991 13.4999L0.999991 8.99993L12 8.99993C12.5523 8.99993 13 8.55222 13 7.99993L13 6.99994C13 6.44766 12.5523 5.99995 12 5.99995L0.999991 5.99995L0.999991 1.49999C0.999991 1.22385 0.776135 0.999995 0.499995 0.999995Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@props: 
-->
