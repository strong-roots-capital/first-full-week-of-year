import { testProp, fc } from 'ava-fast-check'
import { expect } from 'chai'


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
    }
)
