import axios, { type AxiosResponse } from 'axios';

export interface Product {
	caloriesPerServing: number;
	cookTimeMinutes: number;
	cuisine: string;
	difficulty: string;
	id: number;
	image: string;
	ingredients: string[];
	instructions: string[];
	mealType: string[];
	name: string;
	prepTimeMinutes: number;
	rating: number;
	reviewCount: number;
	servings: number;
	tags: string[];
	userId: number;
}

export interface ProductRes {
	limit: number;
	skip: number;
	total: number;
	recipes: Product[];
}

const baseUrl = 'https://dummyjson.com';

export const fetchProducts = async (
	limit = 20,
	offset = 0
): Promise<AxiosResponse<ProductRes, { limit: number; offset: number }>> => {
	return await axios.get(`${baseUrl}/recipes?skip=${offset}&limit=${limit}`);
};
