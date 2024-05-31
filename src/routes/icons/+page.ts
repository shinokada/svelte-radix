import type { MetaProps } from 'runes-meta-tags';

const title = 'Icons - Svelte Radix'
const description = 'Easily Find & Copy SVG Icon name for Your Project'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-radix'
const ogUrl = 'http://localhost:4173/icons'

export const load = ({ url }) => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: ogUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
