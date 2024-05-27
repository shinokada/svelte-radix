import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Icons - Svelte Radix',
    description: 'Svelte Radix Icons and icon names',
    og: {
      title: 'Icons - Svelte Radix',
      description: 'Svelte Radix Icons and icon names'
    },
    twitter: {
      title: 'Icons - Svelte Radix',
      description: 'Svelte Radix Icons and icon names'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
