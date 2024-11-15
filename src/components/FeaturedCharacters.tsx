import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { CharacterItem } from '../components/CharacterItem';
import { ContentContainer } from '../components/ContentContainer';

export const FeaturedCharacters = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['featured'],
		queryFn: () => api.getCharacters(4),
	});

	return (
		<div className='bg-[#054553] p-[80px] pt-0'>
			<h1 className='text-white text-[36px] text-center py-[30px]'>
				Featured Characters!
			</h1>
			<div className='flex flex-row flex-wrap gap-4'>
				{data?.map((item) => {
					return <CharacterItem key={item._id} character={item} />;
				})}
			</div>
		</div>
	);
};
