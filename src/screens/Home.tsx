import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { CharacterItem } from '../components/CharacterItem';
import { ContentContainer } from '../components/ContentContainer';
import { FeaturedCharacters } from '../components/FeaturedCharacters';
import { useSearch } from '../globalState/searchStore';
import { Loading } from '../components/Loading';

export const Home = () => {
	const { data: defaultCharacters, isLoading } = useQuery({
		queryKey: ['default'],
		queryFn: () => api.getCharacters(8),
	});

	const {
		hasSearchResults,
		state: { query, results, isLoading: searchIsLoading },
	} = useSearch();

	return (
		<>
			{(isLoading || searchIsLoading) && (
				<div className='text-center'>
					<Loading />
				</div>
			)}
			<ContentContainer>
				{hasSearchResults && (
					<h1 className='text-[24px] md:text-[36px] text-center pb-5 md:pb-20'>
						Search Results - {query}
					</h1>
				)}

				{query && !hasSearchResults && (
					<h1 className='text-[24px] md:text-[36px] text-center pb-5 md:pb-20'>
						No characters found - {query}
					</h1>
				)}

				<div className='flex flex-col md:flex-row flex-wrap gap-4'>
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
