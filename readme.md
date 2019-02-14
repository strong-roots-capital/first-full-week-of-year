# first-full-week-of-year [![Build status](https://travis-ci.org/strong-roots-capital/first-full-week-of-year.svg?branch=master)](https://travis-ci.org/strong-roots-capital/first-full-week-of-year) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/first-full-week-of-year.svg)](https://npmjs.org/package/@strong-roots-capital/first-full-week-of-year) [![codecov](https://codecov.io/gh/strong-roots-capital/first-full-week-of-year/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/first-full-week-of-year)

> Find the first week of a given year composed entirely of days in said year

Note: this package assumes Monday to be the first day of the week.

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

## Acknowledgments

Many thanks to [moment](https://github.com/moment/moment).
