# svelte-radix icons

[![npm version](https://badgen.net/npm/v/svelte-radix)](https://www.npmjs.com/package/svelte-radix)
[![license](https://badgen.net/npm/license/svelte-radix)](https://github.com/shinokada/svelte-radix/blob/main/LICENSE)

310+ SVG [Radix icons](https://github.com/radix-ui/icons) components for Svelte. Svelte-Radix support major CSS frameworks using the `class` props.

<p align="center">
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-radix/main/static/images/radix.webp" />
</p>

## Icon name list

[Icon list](https://github.com/shinokada/svelte-radix/blob/main/icon-list.md)

## Installation

```sh
npm i -D svelte-radix
```

## REPL

[Demo](https://svelte.dev/repl/fb0def38847240f3a51460a56bf53225?version=3.49.0)

## Usages

In a svelte file:

```html
<script>
  import { Accessibility, ActivityLog, AlignBaseline } from 'svelte-radix';
</script>

<Accessibility />
<ActivityLog />
<AlignBaseline />
```

## Size

Use the `size` prop to change the size of icons.

```html
<Accessibility size="40" />
<ActivityLog size="50" />
<AlignBaseline size="60" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Accessibility color="#c61515" />
<ActivityLog color="#3759e5" />
<AlignBaseline color="#3fe537" />
```

## CSS framworks suport

Use the `class` prop to change size, colors and add additional css.

Tailwind CSS example:

```html
<Accessibility class="h-24 w-24 text-blue-700 mr-4" />
```

Bootstrap examples:

```html
<Accessibility class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<Accessibility class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `Accessibility` has `aria-label="accessibility"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Accessibility ariaLabel="accessibility icon" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<Accessibility tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { Accessibility } from 'svelte-radix';
</script>

<svelte:component this="{Accessibility}" />
```

## Using onMount

```html
<script>
  import { Accessibility } from 'svelte-radix';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Accessibility({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-radix`.

```html
<script>
  import * as Icon from 'svelte-radix';
</script>

<Icon.Accessibility />
<Icon.ActivityLog />

<h1>Size</h1>
<Icon.Accessibility size="30" />
<Icon.ActivityLog size="40" />

<h1>CSS HEX color</h1>
<Icon.Accessibility color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.Accessibility class="text-blue-500" />
<Icon.ActivityLog class="text-pink-700" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
