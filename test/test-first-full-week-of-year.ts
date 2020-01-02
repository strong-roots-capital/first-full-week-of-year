import test, { Macro } from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import firstFullWeekOfYear from '../src/first-full-week-of-year'

const isFirstFullWeekOfYear: Macro<[Date, number]> = (
    t: any,
    start: Date,
    year: number
) => t.deepEqual(start, firstFullWeekOfYear(year))

isFirstFullWeekOfYear.title = (
    _providedTitle = '',
    start: Date,
    year: number
) => `${start.toISOString()} should be start of first full week of year ${year}`

function firstWeek(year: number): Date {
    let firstWeek = moment.utc({year: year}).day('Monday')
    const nextWeek = firstWeek.clone().add(7, 'days')
    if (!firstWeek.isSame(nextWeek, 'year')) {
        firstWeek = nextWeek
    }
    return firstWeek.toDate()
}

for (const year of Array.from({length: 51}).map((_k, i) => i + 1970)) {
    test(isFirstFullWeekOfYear, firstWeek(year), year)
}
