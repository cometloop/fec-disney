import { ContentContainer } from '../components/ContentContainer';
import { FeaturedCharacters } from '../components/FeaturedCharacters';

export const NotFound = () => {
	return (
		<>
			<ContentContainer>
				<div className='flex flex-row flex-wrap gap-4'>404 Not Found</div>
			</ContentContainer>
		</>
	);
};
