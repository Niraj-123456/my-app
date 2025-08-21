import axios from 'axios';

export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export async function fetchPosts(): Promise<Post[]> {
	const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
	return res.data;
}

export async function fetchPostById(id: string): Promise<Post> {
	const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return res.data;
}
