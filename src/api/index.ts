import axios from 'axios';
import { API_BASE_URL } from '../config';
import { CharacterResponse, CharactersResponse } from '../types';

export const api = {
	getCharacters: async (count = 8) => {
		const result = await axios.get<CharactersResponse>(
			`${API_BASE_URL}/character`
		);
		return result.data.data.slice(0, count);
	},
	getCharacter: async (id: number) => {
		const result = await axios.get<CharacterResponse>(
			`${API_BASE_URL}/character/${id}`
		);
		return result.data.data;
	},
	search: async (query: string): Promise<CharactersResponse> => {
		const result = await axios.get(`${API_BASE_URL}/character`, {
			params: {
				name: query,
			},
		});

		// account for bad api design. ideally api always returns an array
		// even if only 1 result is found
		if (!Array.isArray(result.data.data)) {
			return {
				...result.data,
				data: [result.data.data],
			};
		}

		return result.data;
	},
};
