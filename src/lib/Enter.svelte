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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 15 15"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M12 1C12.5523 1 13 1.44772 13 2V13C13 13.5523 12.5523 14 12 14H4.5C4.22386 14 4 13.7761 4 13.5C4 13.2239 4.22386 13 4.5 13H12V2H4.5C4.22386 2 4 1.77614 4 1.5C4 1.22386 4.22386 1 4.5 1H12ZM5.89648 4.89648C6.06735 4.72562 6.33131 4.70387 6.52539 4.83203L6.60352 4.89648L8.85352 7.14648L8.91797 7.22461C9.04613 7.41869 9.02438 7.68265 8.85352 7.85352L6.60352 10.1035C6.40825 10.2988 6.09175 10.2988 5.89648 10.1035C5.70122 9.90825 5.70122 9.59175 5.89648 9.39648L7.29297 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7H7.29297L5.89648 5.60352L5.83203 5.52539C5.70387 5.33131 5.72562 5.06735 5.89648 4.89648Z"
  />
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
