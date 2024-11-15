const stateAbbreviations = [
	'AL',
	'AK',
	'AZ',
	'AR',
	'CA',
	'CO',
	'CT',
	'DE',
	'FL',
	'GA',
	'HI',
	'ID',
	'IL',
	'IN',
	'IA',
	'KS',
	'KY',
	'LA',
	'ME',
	'MD',
	'MA',
	'MI',
	'MN',
	'MS',
	'MO',
	'MT',
	'NE',
	'NV',
	'NH',
	'NJ',
	'NM',
	'NY',
	'NC',
	'ND',
	'OH',
	'OK',
	'OR',
	'PA',
	'RI',
	'SC',
	'SD',
	'TN',
	'TX',
	'UT',
	'VT',
	'VA',
	'WA',
	'WV',
	'WI',
	'WY',
];

type StateSelectProps = {
	onChange: (state: string) => void;
	defaultValue?: string;
};

export const StateSelect: React.FC<StateSelectProps> = ({
	defaultValue,
	onChange,
}) => {
	return (
		<select
			defaultValue={defaultValue}
			onChange={(e) => onChange(e.target.value)}
			className='block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2 w-[100px]'
		>
			<option value=''>Select</option>
			{stateAbbreviations.map((x) => {
				return (
					<option key={x} value={x}>
						{x}
					</option>
				);
			})}
		</select>
	);
};
