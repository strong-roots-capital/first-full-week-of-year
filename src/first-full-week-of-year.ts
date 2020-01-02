/**
 * first-full-week-of-year
 * Find the first week of a given year composed entirely of days in said year
 */

import D from 'od'


function mondayOf(date: Date): Date {
    return D.add('day', 1, D.startOf('week', date))
}

/**
 * Creates a Date object representing the first Monday of the
 * specified year.
 *
 * Note: this package assumes the first day of the week to be Monday.
 *
 * @param date - Date specifying year of which to find the first Monday
 * @returns The start of the Monday of the first full week of `year`
 */
export default function firstFullWeekOfYear(
    date: Date
): Date {

    const firstWeek = mondayOf(D.startOf('year', date))
    const nextWeek = D.add('day', 7, firstWeek)

    return D.get('year', firstWeek) === D.get('year', nextWeek)
        ? firstWeek
        : nextWeek
}
