import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { CharacterItem } from '../components/CharacterItem';
import { ContentContainer } from '../components/ContentContainer';
import { FeaturedCharacters } from '../components/FeaturedCharacters';

export const Home = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['default'],
		queryFn: () => api.getCharacters(8),
	});

	console.log({ data, isLoading });

	return (
		<>
			<ContentContainer>
				<div className='flex flex-row flex-wrap gap-4'>
					{data?.map((item) => {
						return <CharacterItem key={item._id} character={item} />;
					})}
				</div>
			</ContentContainer>
			<FeaturedCharacters />
		</>
	);
};
