import { z } from 'zod';

export const userProfileSchema = z.object({
	first: z.string().min(1).max(50),
	last: z.string().min(1).max(50),
	dob: z.string().min(1).max(50),
	city: z.string().nullable().optional(),
	state: z.string().nullable().optional(),
	favCharacter: z.string().nullable().optional(),
	favMovie: z.string().nullable().optional(),
	favDisneyLand: z.string().nullable().optional(),
	lastUpdated: z.string().nullable().optional(),
});
