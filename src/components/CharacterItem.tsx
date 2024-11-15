import { Link } from 'react-router-dom';
import { routes } from '../routes';
import { Character } from '../types';

type CharacterItemProps = {
	character: Character;
};

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
	const { imageUrl, _id, name, films } = character;

	return (
		<div className='flex flex-col w-[248px] h-[416px] text-center bg-white'>
			<img
				className='w-[248px] h-[248px] object-cover'
				src={imageUrl}
				alt={name}
			/>
			<p className='text-[18px] font-bold text-center pt-5 leading-[21.6px]'>
				{name}
			</p>
			<div className='flex flex-col justify-around flex-1 px-2'>
				<h2 className='text-[15px] font-semibold text-center leading-[16px]'>
					Feature Films
					<br />
					<span className='text-[15px] font-normal text-ellipsis overflow-hidden w-full leading-[16px]'>
						{films.join(', ')}
					</span>
				</h2>

				<Link
					className='font-extrabold uppercase underline pb-5'
					to={routes.characterDetails.getUrl(_id)}
				>
					View Profile
				</Link>
			</div>
		</div>
	);
};
