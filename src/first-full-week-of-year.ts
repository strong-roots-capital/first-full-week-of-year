/**
 * first-full-week-of-year
 * Find the first week of a given year composed entirely of days in said year
 */

import moment from 'moment'

/**
 * Returns the first week of `year` to be composed entirely of days in
 * said year.
 *
 * Note: this package assumes the first day of the week to be Monday.
 *
 * @param year - The year of which to find the first full-week
 * @returns The start of the Monday of the first full week of `year`
 */
export default function firstFullWeekOfYear(year: number): Date {

    let firstWeek = moment.utc({year: year}).day('Monday')
    const nextWeek = firstWeek.clone().add(7, 'days')
    if (!firstWeek.isSame(nextWeek, 'year')) {
        firstWeek = nextWeek
    }
    return firstWeek.toDate()
}
