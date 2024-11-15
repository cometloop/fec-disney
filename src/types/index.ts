export type CharactersResponse = {
	info: Info;
	data: Character[];
};

export type CharacterResponse = {
	info: Info;
	data: Character;
};

export type Info = {
	count: number;
	totalPages: number;
	previousPage: any;
	nextPage: string;
};

export type Character = {
	_id: number;
	films: string[];
	shortFilms: any[];
	tvShows: string[];
	videoGames: string[];
	parkAttractions: string[];
	allies: any[];
	enemies: any[];
	sourceUrl: string;
	name: string;
	imageUrl?: string;
	createdAt: string;
	updatedAt: string;
	url: string;
	__v: number;
};

export type UserProfile = {
	first: string;
	last: string;
	dob: string;
	city?: string;
	state?: string;
	favCharacter?: string;
	favMovie?: string;
	favDisneyLand?: string;
	lastUpdated?: string;
};
