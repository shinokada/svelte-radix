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
    ariaLabel = 'drag handle vertical',
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
      d="M4.09998 12.5C4.09998 12.7209 4.27906 12.9 4.49998 12.9C4.72089 12.9 4.89998 12.7209 4.89998 12.5L4.89998 2.50002C4.89998 2.27911 4.72089 2.10003 4.49998 2.10003C4.27906 2.10003 4.09998 2.27911 4.09998 2.50002L4.09998 12.5ZM6.09998 12.5C6.09998 12.7209 6.27906 12.9 6.49998 12.9C6.72089 12.9 6.89998 12.7209 6.89998 12.5L6.89998 2.50002C6.89998 2.27911 6.72089 2.10003 6.49998 2.10003C6.27906 2.10003 6.09998 2.27911 6.09998 2.50002L6.09998 12.5ZM8.49998 12.9C8.27906 12.9 8.09998 12.7209 8.09998 12.5L8.09998 2.50002C8.09998 2.27911 8.27906 2.10002 8.49998 2.10002C8.72089 2.10002 8.89998 2.27911 8.89998 2.50002L8.89998 12.5C8.89998 12.7209 8.72089 12.9 8.49998 12.9ZM10.1 12.5C10.1 12.7209 10.2791 12.9 10.5 12.9C10.7209 12.9 10.9 12.7209 10.9 12.5L10.9 2.50002C10.9 2.27911 10.7209 2.10002 10.5 2.10002C10.2791 2.10002 10.1 2.27911 10.1 2.50002L10.1 12.5Z"
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
      d="M4.09998 12.5C4.09998 12.7209 4.27906 12.9 4.49998 12.9C4.72089 12.9 4.89998 12.7209 4.89998 12.5L4.89998 2.50002C4.89998 2.27911 4.72089 2.10003 4.49998 2.10003C4.27906 2.10003 4.09998 2.27911 4.09998 2.50002L4.09998 12.5ZM6.09998 12.5C6.09998 12.7209 6.27906 12.9 6.49998 12.9C6.72089 12.9 6.89998 12.7209 6.89998 12.5L6.89998 2.50002C6.89998 2.27911 6.72089 2.10003 6.49998 2.10003C6.27906 2.10003 6.09998 2.27911 6.09998 2.50002L6.09998 12.5ZM8.49998 12.9C8.27906 12.9 8.09998 12.7209 8.09998 12.5L8.09998 2.50002C8.09998 2.27911 8.27906 2.10002 8.49998 2.10002C8.72089 2.10002 8.89998 2.27911 8.89998 2.50002L8.89998 12.5C8.89998 12.7209 8.72089 12.9 8.49998 12.9ZM10.1 12.5C10.1 12.7209 10.2791 12.9 10.5 12.9C10.7209 12.9 10.9 12.7209 10.9 12.5L10.9 2.50002C10.9 2.27911 10.7209 2.10002 10.5 2.10002C10.2791 2.10002 10.1 2.27911 10.1 2.50002L10.1 12.5Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@props: 
-->
