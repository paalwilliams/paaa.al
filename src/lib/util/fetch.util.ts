import axios from 'axios';

export type GithubApiResponse = {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	html_url: string;
	git_url: string;
	download_url: string;
	type: 'file' | 'dir';
	_links: {
		self: string;
		git: string;
		html: string;
	};
};
export const getBlogPosts = async () => {
	const { data } = await axios.get<GithubApiResponse[]>(
		'https://api.github.com/repos/paalwilliams/blog-posts/contents/'
	);
	return data.filter((entry) => entry.type != 'dir');
};
