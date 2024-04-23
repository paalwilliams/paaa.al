import type { PageServerLoad } from './$types';

import { ghFetch } from '$lib/utils/fetch';

export const load: PageServerLoad = async ({ params }) => {
	const { slideid } = params;

	const {
		data: { files }
	} = await ghFetch.get(`/gists/${slideid}`);

	return {
		...files
	};
};
