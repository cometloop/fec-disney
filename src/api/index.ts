import axios from 'axios';
import { API_BASE_URL } from '../config';
import { Character, CharacterResponse, CharactersResponse } from '../types';
import toast from 'react-hot-toast';

const GENERIC_ERROR = 'Something went wrong. Please Try again';

const emptyCharactersResponse: CharactersResponse = {
	data: [],
	info: {
		count: 0,
		nextPage: '',
		previousPage: '',
		totalPages: 0,
	},
};

export const api = {
	getCharacters: async (count = 8): Promise<Character[]> => {
		try {
			const result = await axios.get<CharactersResponse>(
				`${API_BASE_URL}/character`
			);
			return result.data.data.slice(0, count);
		} catch (e) {
			toast.error(GENERIC_ERROR);
			return [];
		}
	},
	getCharacter: async (id: number): Promise<Character | undefined> => {
		try {
			const result = await axios.get<CharacterResponse>(
				`${API_BASE_URL}/character/${id}`
			);
			return result.data.data;
		} catch (e) {
			toast.error(GENERIC_ERROR);
			return undefined;
		}
	},
	search: async (query: string): Promise<CharactersResponse> => {
		try {
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
			} else {
				return result.data;
			}
		} catch (e) {
			toast.error(GENERIC_ERROR);
			return emptyCharactersResponse;
		}
	},
};
