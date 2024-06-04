import type { MetaProps } from 'runes-meta-tags';

const title = 'Custom icons - Svelte Radix'
const description = 'How to create a custom icons with Svelte Radix'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-radix'
export const load = () => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};