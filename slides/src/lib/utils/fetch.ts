import axios from 'axios';
const GH_TOKEN = '';

const GITHUB_API_BASE_URL = '';

const _createBaseFetch = (...args: Parameters<typeof axios.create>) => {
	return axios.create(...args);
};

const createGithubFetch = async (token: string) => {
	return _createBaseFetch({
		baseURL: GITHUB_API_BASE_URL,
		headers: {
			Accept: 'application/vnd.github+json',
			Authorization: `Bearer ${token}`,
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});
};

export const ghFetch = await createGithubFetch(GH_TOKEN);
