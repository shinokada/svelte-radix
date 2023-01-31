<h1 align="center">Svelte Radix</h1>

<p align="center">
<a href="https://svelte-radix.codewithshin.com/">Svelte-Radix</a>
</p>

<p align="center">
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield"></a>
<a href="https://www.npmjs.com/package/svelte-radix" rel="nofollow"><img src="https://img.shields.io/npm/v/svelte-radix" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/shinokada/svelte-radix" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-radix" rel="nofollow"><img src="https://img.shields.io/npm/dw/svelte-radix.svg" alt="npm"></a>
</p>

310+ SVG [Radix icons](https://github.com/radix-ui/icons) components for Svelte. Svelte-Radix support major CSS frameworks using the `class` props.

<p align="center">
<img src="/static/images/radix-optimized.png" width="650" />
</p>

## Installation

```sh
npm i -D svelte-radix
```

## Icon name list

[Icon list](/icon-list.md)

## REPL

[Demo](https://svelte.dev/repl/fb0def38847240f3a51460a56bf53225)

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

## Experience lightning-fast browsing and offline access with Our PWA

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
