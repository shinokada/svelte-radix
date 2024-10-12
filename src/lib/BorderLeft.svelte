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
    ariaLabel = 'border left',
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
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 1L1.75 14L0.249999 14L0.25 1L1.75 1Z" />
  <rect x="10" y="7" width="1" height="1" rx=".5" transform="rotate(90 10 7)" />
  <rect x="10" y="13" width="1" height="1" rx=".5" transform="rotate(90 10 13)" />
  <rect x="12" y="7" width="1" height="1" rx=".5" transform="rotate(90 12 7)" />
  <rect x="12" y="13" width="1" height="1" rx=".5" transform="rotate(90 12 13)" />
  <rect x="8" y="7" width="1" height="1" rx=".5" transform="rotate(90 8 7)" />
  <rect x="14" y="7" width="1" height="1" rx=".5" transform="rotate(90 14 7)" />
  <rect x="8" y="13" width="1" height="1" rx=".5" transform="rotate(90 8 13)" />
  <rect x="14" y="13" width="1" height="1" rx=".5" transform="rotate(90 14 13)" />
  <rect x="8" y="5" width="1" height="1" rx=".5" transform="rotate(90 8 5)" />
  <rect x="14" y="5" width="1" height="1" rx=".5" transform="rotate(90 14 5)" />
  <rect x="8" y="3" width="1" height="1" rx=".5" transform="rotate(90 8 3)" />
  <rect x="14" y="3" width="1" height="1" rx=".5" transform="rotate(90 14 3)" />
  <rect x="8" y="9" width="1" height="1" rx=".5" transform="rotate(90 8 9)" />
  <rect x="14" y="9" width="1" height="1" rx=".5" transform="rotate(90 14 9)" />
  <rect x="8" y="11" width="1" height="1" rx=".5" transform="rotate(90 8 11)" />
  <rect x="14" y="11" width="1" height="1" rx=".5" transform="rotate(90 14 11)" />
  <rect x="6" y="7" width="1" height="1" rx=".5" transform="rotate(90 6 7)" />
  <rect x="6" y="13" width="1" height="1" rx=".5" transform="rotate(90 6 13)" />
  <rect x="4" y="7" width="1" height="1" rx=".5" transform="rotate(90 4 7)" />
  <rect x="4" y="13" width="1" height="1" rx=".5" transform="rotate(90 4 13)" />
  <rect x="10" y="1" width="1" height="1" rx=".5" transform="rotate(90 10 1)" />
  <rect x="12" y="1" width="1" height="1" rx=".5" transform="rotate(90 12 1)" />
  <rect x="8" y="1" width="1" height="1" rx=".5" transform="rotate(90 8 1)" />
  <rect x="14" y="1" width="1" height="1" rx=".5" transform="rotate(90 14 1)" />
  <rect x="6" y="1" width="1" height="1" rx=".5" transform="rotate(90 6 1)" />
  <rect x="4" y="1" width="1" height="1" rx=".5" transform="rotate(90 4 1)" />
</svg>
