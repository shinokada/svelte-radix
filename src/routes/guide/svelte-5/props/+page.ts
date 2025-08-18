import type { MetaProps } from 'runes-meta-tags';

const title = 'Props - Svelte Radix v2';
const description = 'How to use Svelte Radix v2 props';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-radix';

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
