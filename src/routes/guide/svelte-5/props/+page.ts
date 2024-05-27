import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Radix v2',
    description: 'How to use props with Svelte Radix v2',
    og: {
      title: 'Props - Svelte Radix v2',
      description: 'How to use props with Svelte Radix v2'
    },
    twitter: {
      title: 'Props - Svelte Radix v2',
      description: 'How to use props with Svelte Radix v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
