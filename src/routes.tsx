export const routes = {
	home: '/',
	searchResults: '/search-results',
	characterDetails: {
		path: '/character-details/:id',
		getUrl: (id: number) => `/character-details/${id}`,
	},
	user: {
		profile: '/user/profile',
		editProfile: '/user/profile/change',
	},
};
