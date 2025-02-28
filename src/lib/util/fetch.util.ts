import axios from 'axios';
import { GITHUB_API_BASE } from './constants';

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
	const { data } = await axios.get<GithubApiResponse[]>(`${GITHUB_API_BASE}/blog-posts/contents/`);
	return data.filter((entry) => entry.type != 'dir');
};

export const getBlogPost = async (path: string) => {
	return axios.get(`https://raw.githubusercontent.com/paalwilliams/blog-posts/main/${path}`);
};
