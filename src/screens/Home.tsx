import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { CharacterItem } from '../components/CharacterItem';
import { ContentContainer } from '../components/ContentContainer';
import { FeaturedCharacters } from '../components/FeaturedCharacters';
import { Loading } from '../components/Loading';

export const Home = () => {
	const { data: defaultCharacters, isLoading } = useQuery({
		queryKey: ['default'],
		queryFn: () => api.getCharacters(8),
	});

	return (
		<>
			{isLoading && (
				<div className='text-center'>
					<Loading />
				</div>
			)}
			<ContentContainer>
				<div className='flex flex-col md:flex-row flex-wrap gap-4'>
					{defaultCharacters?.map((item) => {
						return <CharacterItem key={item._id} character={item} />;
					})}
				</div>
			</ContentContainer>
			<FeaturedCharacters />
		</>
	);
};
