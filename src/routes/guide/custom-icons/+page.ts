import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Svelte Radix',
    description: 'How to create a custom icons with Svelte Radix',
    og: {
      title: 'Custom icons example - Svelte Radix',
      description: 'How to create a custom icons with Svelte Radix'
    },
    twitter: {
      title: 'Custom icons example - Svelte Radix',
      description: 'How to create a custom icons with Svelte Radix'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
