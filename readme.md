# first-full-week-of-year [![Build status](https://travis-ci.org/strong-roots-capital/first-full-week-of-year.svg?branch=master)](https://travis-ci.org/strong-roots-capital/first-full-week-of-year) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/first-full-week-of-year.svg)](https://npmjs.org/package/@strong-roots-capital/first-full-week-of-year) [![codecov](https://codecov.io/gh/strong-roots-capital/first-full-week-of-year/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/first-full-week-of-year)

> Find the first week of a given year composed entirely of days in said year

Note: this package assumes _Monday_ to be the first day of the week.

## Install

``` shell
npm install @strong-roots-capital/first-full-week-of-year
```

## Use

``` typescript
import firstFullWeekOfYear from '@strong-roots-capital/first-full-week-of-year'

console.log(firstFullWeekOfYear(2019))
//=>  2019-01-07T00:00:00.000Z
```

## Documentation

<details><summary><code>firstFullWeekOfYear :: number -> Date</code></summary>

``` hs
firstFullWeekOfYear :: number -> Date
```

</details>

Creates a Date object representing the first Monday of the specified
year.

## Acknowledgments

- [od](https://github.com/strong-roots-capital/od)
- [fast-check](https://github.com/dubzzz/fast-check)
