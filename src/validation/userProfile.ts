import { DateTime } from 'luxon';
import { z } from 'zod';

export const isMonthDayYear = (value: string) => {
	try {
		const result = DateTime.fromFormat(value, 'MM/dd/yyyy');
		return result.isValid;
	} catch (e) {
		return false;
	}
};

export const userProfileSchema = z.object({
	first: z.string().min(1).max(50),
	last: z.string().min(1).max(50),
	dob: z.string().refine(isMonthDayYear, 'Invalid date: ex: 10/01/2010'),
	city: z.string().nullable().optional(),
	state: z.string().nullable().optional(),
	favCharacter: z.string().nullable().optional(),
	favMovie: z.string().nullable().optional(),
	favDisneyLand: z.string().nullable().optional(),
	lastUpdated: z.string().nullable().optional(),
});
