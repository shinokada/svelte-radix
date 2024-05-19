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
    ariaLabel = 'border split',
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
    <rect x="7" y="5.025" width="1" height="1" rx=".5" />
    <rect x="7" y="3.025" width="1" height="1" rx=".5" />
    <rect x="7" y="7.025" width="1" height="1" rx=".5" />
    <rect x="7" y="13.025" width="1" height="1" rx=".5" />
    <rect x="7" y="1.025" width="1" height="1" rx=".5" />
    <rect x="13" y="7.025" width="1" height="1" rx=".5" />
    <rect x="5" y="7.025" width="1" height="1" rx=".5" />
    <rect x="3" y="7.025" width="1" height="1" rx=".5" />
    <rect x="9" y="7.025" width="1" height="1" rx=".5" />
    <rect x="11" y="7.025" width="1" height="1" rx=".5" />
    <rect x="7" y="9.025" width="1" height="1" rx=".5" />
    <rect x="7" y="11.025" width="1" height="1" rx=".5" />
    <rect x="1" y="7.025" width="1" height="1" rx=".5" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 1.49994C1 1.2238 1.22386 0.999939 1.5 0.999939H6V1.99994H2V5.99994H1V1.49994ZM13 1.99994H9V0.999939H13.5C13.7761 0.999939 14 1.2238 14 1.49994V5.99994H13V1.99994ZM1 13.4999V8.99994H2V12.9999H6V13.9999H1.5C1.22386 13.9999 1 13.7761 1 13.4999ZM13 12.9999V8.99994H14V13.4999C14 13.7761 13.7761 13.9999 13.5 13.9999H9.5V12.9999H13Z"
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
    <rect x="7" y="5.025" width="1" height="1" rx=".5" />
    <rect x="7" y="3.025" width="1" height="1" rx=".5" />
    <rect x="7" y="7.025" width="1" height="1" rx=".5" />
    <rect x="7" y="13.025" width="1" height="1" rx=".5" />
    <rect x="7" y="1.025" width="1" height="1" rx=".5" />
    <rect x="13" y="7.025" width="1" height="1" rx=".5" />
    <rect x="5" y="7.025" width="1" height="1" rx=".5" />
    <rect x="3" y="7.025" width="1" height="1" rx=".5" />
    <rect x="9" y="7.025" width="1" height="1" rx=".5" />
    <rect x="11" y="7.025" width="1" height="1" rx=".5" />
    <rect x="7" y="9.025" width="1" height="1" rx=".5" />
    <rect x="7" y="11.025" width="1" height="1" rx=".5" />
    <rect x="1" y="7.025" width="1" height="1" rx=".5" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 1.49994C1 1.2238 1.22386 0.999939 1.5 0.999939H6V1.99994H2V5.99994H1V1.49994ZM13 1.99994H9V0.999939H13.5C13.7761 0.999939 14 1.2238 14 1.49994V5.99994H13V1.99994ZM1 13.4999V8.99994H2V12.9999H6V13.9999H1.5C1.22386 13.9999 1 13.7761 1 13.4999ZM13 12.9999V8.99994H14V13.4999C14 13.7761 13.7761 13.9999 13.5 13.9999H9.5V12.9999H13Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-radix.codewithshin.com/)
## Props
@props: 
-->
