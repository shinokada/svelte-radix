# Svelte Radix

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-radix" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-radix" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-radix" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-radix" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-radix.svg" alt="npm" height="25" style="height: 25px !important;"></a>
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
  import { Icon } from 'svelte-radix';
</script>

<Icon name="accessibility" />
```

## Props

- @prop name;
- @prop width = "15";
- @prop height = "15";
- @prop role = 'img';
- @prop color = 'currentColor'
- @prop ariaLabel='icon name'

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `width` and `height` props to change the size of icons.

```html
<Icon name="accessibility" width="100" height="100" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<Icon name="accessibility" class="shrink-0 h-20 w-20" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Icon name="accessibility" color="#c61515" />
```

## CSS frameworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<Icon name="accessibility" class="text-red-700 inline m-1" />
```

Bootstrap examples:

```html
<Icon name="accessibility" class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<Icon name="accessibility"  class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `accessibility` has `aria-label="accessibility"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Icon name="accessibility" ariaLabel="red accessibility" color="#c61515"/>
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Icon name="accessibility"  tabindex="-1" />
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
<Icon name="accessibility"  tabindex="0" />
```

## Using svelte:component

```html
<svelte:component this="{Icon}" name="accessibility" />
```

## Using onMount

```html
<script>
  import {Icon} from 'svelte-radix';
  import { onMount } from 'svelte';
  const props = {
    name: 'accessibility',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
```


## Import all

Use `import {Icon, icons} from 'svelte-radix';`.

```html
<script>
  import {Icon, icons} from 'svelte-radix';
</script>

{#each Object.keys(icons) as name}
<div class="flex gap-4 items-center text-lg">
  <Icon name={name} bind:width={size} bind:height={size} class="shrink-0"/>
  {name}
</div>
{/each}
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
