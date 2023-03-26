import type { PageServerLoad } from './$types';

export let load: PageServerLoad = async () => {
	return {
		posts: (await fetch('https://jsonplaceholder.typicode.com/posts')).json()
	};
};
