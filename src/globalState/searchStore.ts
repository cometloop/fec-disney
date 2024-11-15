import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { CharactersResponse } from '../types';

type State = {
	query: string;
	isLoading: boolean;
	results?: CharactersResponse;
};

type Actions = {
	updateQuery: (query: string) => void;
	updateResults: (results: CharactersResponse) => void;
	setIsLoading: (val: boolean) => void;
	reset: () => void;
};

type Store = {
	state: State;
	actions: Actions;
};

const DEFAULT_STATE: State = {
	query: '',
	isLoading: false,
	results: undefined,
};

const useSearchStore = create<Store>()(
	immer((set) => ({
		state: { ...DEFAULT_STATE },
		actions: {
			updateQuery: (query) => {
				set(({ state }) => {
					state.query = query;
					if (query === '') {
						state.results = undefined;
					}
				});
			},
			updateResults: (results) => {
				set(({ state }) => {
					state.results = results;
				});
			},
			setIsLoading: (val) => {
				set(({ state }) => {
					state.isLoading = val;
				});
			},
			reset: () => {
				set(({ state }) => {
					state = { ...DEFAULT_STATE };
				});
			},
		},
	}))
);

export type UseSearch = Store & {
	hasSearchResults: boolean;
};

export const useSearch = (): UseSearch => {
	const { state, actions } = useSearchStore((x) => x);

	const hasSearchResults = Boolean(
		state.results?.info?.count && state.results.info.count > 0
	);

	return {
		state,
		actions,
		hasSearchResults,
	};
};
