import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Setting Global Icon - Svelte Radix',
    description: 'Setting Global Icon using setContext with Svelte Radix',
    og: {
      title: 'Setting Global Icon - Svelte Radix',
      description: 'Setting Global Icon using setContext with Svelte Radix'
    },
    twitter: {
      title: 'Setting Global Icon - Svelte Radix',
      description: 'Setting Global Icon using setContext with Svelte Radix'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
