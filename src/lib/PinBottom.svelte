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
    ariaLabel = 'pin bottom',
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
      d="M13.5 13.95C13.7485 13.95 13.95 13.7485 13.95 13.5C13.95 13.2514 13.7485 13.05 13.5 13.05L1.49995 13.05C1.25142 13.05 1.04995 13.2514 1.04995 13.5C1.04995 13.7485 1.25142 13.95 1.49995 13.95L13.5 13.95ZM11.0681 7.5683C11.2439 7.39257 11.2439 7.10764 11.0681 6.93191C10.8924 6.75617 10.6075 6.75617 10.4317 6.93191L7.94993 9.41371L7.94993 1.49998C7.94993 1.25146 7.74846 1.04998 7.49993 1.04998C7.2514 1.04998 7.04993 1.25146 7.04993 1.49998L7.04993 9.41371L4.56813 6.93191C4.39239 6.75617 4.10746 6.75617 3.93173 6.93191C3.75599 7.10764 3.75599 7.39257 3.93173 7.5683L7.18173 10.8183C7.35746 10.994 7.64239 10.994 7.81812 10.8183L11.0681 7.5683Z"
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
      d="M13.5 13.95C13.7485 13.95 13.95 13.7485 13.95 13.5C13.95 13.2514 13.7485 13.05 13.5 13.05L1.49995 13.05C1.25142 13.05 1.04995 13.2514 1.04995 13.5C1.04995 13.7485 1.25142 13.95 1.49995 13.95L13.5 13.95ZM11.0681 7.5683C11.2439 7.39257 11.2439 7.10764 11.0681 6.93191C10.8924 6.75617 10.6075 6.75617 10.4317 6.93191L7.94993 9.41371L7.94993 1.49998C7.94993 1.25146 7.74846 1.04998 7.49993 1.04998C7.2514 1.04998 7.04993 1.25146 7.04993 1.49998L7.04993 9.41371L4.56813 6.93191C4.39239 6.75617 4.10746 6.75617 3.93173 6.93191C3.75599 7.10764 3.75599 7.39257 3.93173 7.5683L7.18173 10.8183C7.35746 10.994 7.64239 10.994 7.81812 10.8183L11.0681 7.5683Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@props: 
-->
