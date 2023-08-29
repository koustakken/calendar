import React from 'react';
import { createDate, createMonth, getMonthesNames, getWeekDaysNames } from '../../../utils/helpers/date';


interface UseCalendarParams {
	locale? : string;
	selectedDate? : Date;
	firstWeekDayNumber?: number;
}

const getYearsInterval = (year: number) => {
	const startYear = Math.floor(year / 10) * 10;
	return [...Array(10)].map((_, index) => startYear + index);
};

export const useCalendar = ({ locale, selectedDate: date, firstWeekDayNumber = 2 }: UseCalendarParams) => {
	const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days');
	const [selectedDay, setSelectedDay] = React.useState(createDate({ date }));
	const [selectedMonth, setSelectedMonth] = React.useState(
		createMonth({ date: new Date(selectedDay.year, selectedDay.monthIndex), locale })
	);
	const [selectedYear, setSelectedYear] = React.useState(selectedDay.year);
  	const [selectedYearsInterval, setSelectedYearsInterval] = React.useState(getYearsInterval(selectedDay.year));
	
	const monthesNames = React.useMemo(() => getMonthesNames(locale), []);
	const weekDaysNames = React.useMemo(() => getWeekDaysNames(firstWeekDayNumber, locale), []);

	const days = React.useMemo(() => selectedMonth.createMonthDays(), [selectedMonth, selectedYear]);

	
	
	return {}
}