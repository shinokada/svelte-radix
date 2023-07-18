# Svelte Radix

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-radix" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-radix" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-radix" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-radix" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-radix.svg" alt="npm" height="25"></a>
</div>

310+ SVG [Radix icons](https://github.com/radix-ui/icons) components for Svelte. 

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/shinokada/svelte-radix)

## Original source

[radix-ui/icons](https://github.com/radix-ui/icons)

## License

[svelte-radix License](https://github.com/shinokada/svelte-radix/blob/main/LICENSE)

[radix-ui/icons LICENSE](https://github.com/radix-ui/icons/blob/master/LICENSE)


## Installation

```sh
pnpm i -D svelte-radix
```

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

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import ActivityLog from 'svelte-radix/ActivityLog.svelte';
</script>

<ActivityLog />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size = '16';
- role = 'img';
- color = 'currentColor';
- ariaLabel = 'accessibility 16';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the size of icons.

```html
<Accessibility size="40" />
<ActivityLog size="50" />
<AlignBaseline size="60" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<ActivityLog class="shrink-0 h-20 w-20" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Accessibility color="#c61515" />
<ActivityLog color="#3759e5" />
<AlignBaseline color="#3fe537" />
```

## CSS framworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

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

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Accessibility tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

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

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
