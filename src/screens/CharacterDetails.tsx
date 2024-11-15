import { useQuery } from '@tanstack/react-query';
import { api } from '../api';
import { useParams } from 'react-router';
import { colors } from '../colors';
import { DateTime } from 'luxon';
import { FeaturedCharacters } from '../components/FeaturedCharacters';

export const CharacterDetails = () => {
	const { id: idStr } = useParams();
	const id = parseInt(idStr || '');

	const { data, isLoading } = useQuery({
		queryKey: ['character', id],
		queryFn: () => api.getCharacter(id),
	});

	if (!data) {
		return null;
	}

	const { imageUrl, sourceUrl, name, films, shortFilms, tvShows, updatedAt } =
		data;

	console.log({ data, isLoading });

	return (
		<>
			<div className={`bg-[${colors.gray}] p-[80px]`}>
				<div className='flex flex-row flex-wrap gap-8'>
					<img
						className='w-[439px] h-[529px] object-cover'
						style={{
							boxShadow: '0px 4px 24px 0px #0545531F',
							borderRadius: '16px',
						}}
						src={imageUrl}
						alt={name}
					/>
					<div>
						<h1 className='text-[40px]'>{name}</h1>
						<p className='py-8'>
							Last Updated{' '}
							{DateTime.fromISO(updatedAt).toLocaleString(DateTime.DATE_FULL)}{' '}
						</p>
						<div className='flex flex-col gap-14'>
							<CharacterWorkList header='Featured Films' works={films} />
							<CharacterWorkList header='Short Films' works={shortFilms} />
							<CharacterWorkList header='TV Shows Films' works={tvShows} />
						</div>

						<div className='my-14'>
							<a href={sourceUrl}>
								<button
									type='button'
									className='rounded-xl bg-[#054553] text-white shadow-sm px-[24px] py-4'
								>
									Explore More Character Details
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<FeaturedCharacters />
		</>
	);
};

type CharacterWorkListProps = {
	header: string;
	works: string[];
};

const CharacterWorkList: React.FC<CharacterWorkListProps> = ({
	header,
	works,
}) => {
	return (
		<div>
			<h2 className='text-[18px] font-semibold leading-[24px]'>{header}</h2>
			<ul className='list-disc ml-5'>
				{works.map((x) => {
					return <li key={x}>{x}</li>;
				})}
			</ul>
		</div>
	);
};
