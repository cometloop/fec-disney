import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { CharacterItem } from '../components/CharacterItem';
import { ContentContainer } from '../components/ContentContainer';
import { FeaturedCharacters } from '../components/FeaturedCharacters';
import { useSearch } from '../globalState/searchStore';

export const Home = () => {
	const { data: defaultCharacters } = useQuery({
		queryKey: ['default'],
		queryFn: () => api.getCharacters(8),
	});

	const {
		hasSearchResults,
		state: { query, results },
	} = useSearch();

	return (
		<>
			<ContentContainer>
				{hasSearchResults && (
					<h1 className='text-[36px] text-center pb-20'>
						Search Results - {query}
					</h1>
				)}
				<div className='flex flex-row flex-wrap gap-4'>
					{hasSearchResults &&
						results?.data?.map((item) => {
							return <CharacterItem key={item._id} character={item} />;
						})}

					{!hasSearchResults &&
						defaultCharacters?.map((item) => {
							return <CharacterItem key={item._id} character={item} />;
						})}
				</div>
			</ContentContainer>
			<FeaturedCharacters />
		</>
	);
};
