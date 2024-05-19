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
    ariaLabel = 'arrow top left',
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
      d="M11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6465L4.70711 4L9 4C9.27614 4 9.5 3.77614 9.5 3.5C9.5 3.22386 9.27614 3 9 3L3.5 3C3.36739 3 3.24021 3.05268 3.14645 3.14645C3.05268 3.24022 3 3.36739 3 3.5L3 9.00001C3 9.27615 3.22386 9.50001 3.5 9.50001C3.77614 9.50001 4 9.27615 4 9.00001V4.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536Z"
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
      d="M11.3536 11.3536C11.5488 11.1583 11.5488 10.8417 11.3536 10.6465L4.70711 4L9 4C9.27614 4 9.5 3.77614 9.5 3.5C9.5 3.22386 9.27614 3 9 3L3.5 3C3.36739 3 3.24021 3.05268 3.14645 3.14645C3.05268 3.24022 3 3.36739 3 3.5L3 9.00001C3 9.27615 3.22386 9.50001 3.5 9.50001C3.77614 9.50001 4 9.27615 4 9.00001V4.70711L10.6464 11.3536C10.8417 11.5488 11.1583 11.5488 11.3536 11.3536Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@props: 
-->
