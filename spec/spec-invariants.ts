import { testProp, fc } from 'ava-fast-check'
import { expect } from 'chai'
import D from 'od'


/**
 * Library under test
 */

import firstFullWeekOfYear from '../src/first-full-week-of-year'

const DAY_MONDAY = 1

testProp(
    'should yield a Monday',
    [
        fc.date()
    ],
    (date: Date) => {
        const firstWeekOfYear = firstFullWeekOfYear(date)
        expect(firstWeekOfYear.getUTCDay()).to.equal(DAY_MONDAY)
    },
    {
        numRuns: 1000
    }
)

testProp(
    'should yield a date of same year',
    [
        fc.date()
    ],
    (date: Date) => {
        const firstWeekOfYear = firstFullWeekOfYear(date)
        expect(D.get('year', firstWeekOfYear)).to.equal(D.get('year', date))
    },
    {
        numRuns: 1000
    }
)

testProp(
    'there should be no earlier Monday in the returned year',
    [
        fc.date()
    ],
    (date: Date) => {
        const firstWeekOfYear = firstFullWeekOfYear(date)
        expect(D.get('year', D.subtract('day', 7, firstWeekOfYear)))
            .to.equal(D.get('year', date) - 1)
    },
    {
        numRuns: 1000
    }
)
