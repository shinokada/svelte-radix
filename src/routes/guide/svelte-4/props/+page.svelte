<script lang="ts">
  import {
    HighlightCompo,
    CodeWrapper,
    Code,
    H2,
    H3,
    removeHyphensAndCapitalize
  } from 'runes-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Props - Svelte Radix v1</h1>

<H2>Prop</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Size</H2>

<p>
  To change the size of an icon, use the <Code>size</Code> prop and specify the desired size. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size.md'] as string} />

<p>
  If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by
  including the desired classes in the <Code>class</Code> prop. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size-2.md'] as string} />

<H2>CSS HEX Color</H2>

<p>
  Use the color attribute to change colors with HEX color code for Filled and Outlined components.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/css-hex-color.md'] as string} />

<H2>CSS framework</H2>

<p>
  You can apply CSS framework color and other attributes directly to the icon component or its
  parent tag using the <Code>class</Code> prop.
</p>

<H3>Tailwind CSS</H3>

<HighlightCompo codeLang="ts" code={modules['./md/tailwind-css.md'] as string} />

<H3>Bootstrap</H3>

<HighlightCompo codeLang="ts" code={modules['./md/bootstrap.md'] as string} />

<H2>Dark mode</H2>

<p>
  If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the <Code
    >class</Code
  > prop.
</p>

<p>Let's use <Code>dark</Code> for the dark mode class as an example.</p>

<HighlightCompo codeLang="ts" code={modules['./md/dark-mode.md'] as string} />

<H2>A11y</H2>

<p>
  All icons have aria-label. For example <Code>AlignCenterHorizontally</Code> has <Code
    >aria-label="align center horizontally"</Code
  >. Use <Code>ariaLabel</Code> prop to modify the <Code>aria-label</Code> value.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y.md'] as string} />

<H2>withEvents</H2>

<p>
  As default all icons are unfocusable. However you can add <Code>withEvents</Code> prop to make your
  icons focusable.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/withevents.md'] as string} />

<p>
  It is possible to add <Code>tabindex="0"</Code>, but it is not recommended for A11y. If you want
  to use it add <Code>withEvents</Code> prop as well.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/withevents-2.md'] as string} />

<H2>Events</H2>

<p>Use <Code>withEvents</Code> prop to use the following events:</p>

<HighlightCompo codeLang="ts" code={modules['./md/events.md'] as string} />

<HighlightCompo codeLang="ts" code={modules['./md/events-2.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />
