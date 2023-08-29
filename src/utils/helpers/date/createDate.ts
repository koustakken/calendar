import { getWeekNumber } from './getWeekNumber';

interface CreateDateParams {
	locale?: string;
	date: Date | undefined;
}

export const createDate = (params?: CreateDateParams) => {
	const locale = params?.locale?? 'default';
	const d = params?.date?? new Date();
	
	// days 
	const dayNumber = d.getDate();
	const day = d.toLocaleDateString(locale, { weekday: 'long' });
	const dayNumberOnWeek = d.getDate() + 1;
	const dayShort = d.toLocaleDateString(locale, { weekday:'short' });
	
	// years
	const year = d.getFullYear();
	const yearShort = d.toLocaleDateString(locale, { year: '2-digit' });
	
    // months
	const month = d.toLocaleDateString(locale, { month: 'long' });
	const monthShort = d.toLocaleDateString(locale, { month:'short' });
	const monthNumber = d.getMonth() + 1;
	const monthIndex = d.getMonth();

	// time
	const timestamp = d.getTime();

	// week
	const week = getWeekNumber(d);

	return {
		date: d,
		dayNumber,
		day,
		dayNumberOnWeek,
		dayShort,
		year,
		yearShort,
		month,
		monthShort,
		monthNumber,
		monthIndex,
		timestamp,
		week
	  }
}