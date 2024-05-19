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
    ariaLabel = 'arrow bottom left',
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
      d="M11.3536 3.64644C11.5488 3.8417 11.5488 4.15828 11.3536 4.35354L4.70711 11L9 11C9.27614 11 9.5 11.2239 9.5 11.5C9.5 11.7761 9.27614 12 9 12L3.5 12C3.36739 12 3.24021 11.9473 3.14645 11.8536C3.05268 11.7598 3 11.6326 3 11.5L3 5.99999C3 5.72385 3.22386 5.49999 3.5 5.49999C3.77614 5.49999 4 5.72385 4 5.99999V10.2929L10.6464 3.64643C10.8417 3.45117 11.1583 3.45117 11.3536 3.64644Z"
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
      d="M11.3536 3.64644C11.5488 3.8417 11.5488 4.15828 11.3536 4.35354L4.70711 11L9 11C9.27614 11 9.5 11.2239 9.5 11.5C9.5 11.7761 9.27614 12 9 12L3.5 12C3.36739 12 3.24021 11.9473 3.14645 11.8536C3.05268 11.7598 3 11.6326 3 11.5L3 5.99999C3 5.72385 3.22386 5.49999 3.5 5.49999C3.77614 5.49999 4 5.72385 4 5.99999V10.2929L10.6464 3.64643C10.8417 3.45117 11.1583 3.45117 11.3536 3.64644Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@props: 
-->
