/**
 * first-full-week-of-year
 * Find the first week of a given year composed entirely of days in said year
 */

import D from 'od'


function mondayOf(date: Date): Date {
    return D.add('day', 1, D.startOf('week', date))
}

/**
 * Returns the first week of `year` to be composed entirely of days in
 * said year.
 *
 * Note: this package assumes the first day of the week to be Monday.
 *
 * @param year - The year of which to find the first full-week
 * @returns The start of the Monday of the first full week of `year`
 */
export default function firstFullWeekOfYear(
    year: number
): Date {

    const firstWeek = mondayOf(D.of({year: year}))
    const nextWeek = D.add('day', 7, firstWeek)

    return D.get('year', firstWeek) === D.get('year', nextWeek)
        ? firstWeek
        : nextWeek
}
