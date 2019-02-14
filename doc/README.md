
first-full-week-of-year [![Build status](https://travis-ci.org/strong-roots-capital/first-full-week-of-year.svg?branch=master)](https://travis-ci.org/strong-roots-capital/first-full-week-of-year) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/first-full-week-of-year.svg)](https://npmjs.org/package/@strong-roots-capital/first-full-week-of-year) [![codecov](https://codecov.io/gh/strong-roots-capital/first-full-week-of-year/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/first-full-week-of-year)
================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Find the first week of a given year composed entirely of days in said year

Note: this package assumes Monday to be the first day of the week.

Install
-------

```shell
npm install @strong-roots-capital/first-full-week-of-year
```

Use
---

```typescript
import firstFullWeekOfYear from '@strong-roots-capital/first-full-week-of-year'

console.log(firstFullWeekOfYear(2019))
//=>  2019-01-07T00:00:00.000Z
```

Acknowledgments
---------------

Many thanks to [moment](https://github.com/moment/moment).

## Index

### Functions

* [firstFullWeekOfYear](#firstfullweekofyear)

---

## Functions

<a id="firstfullweekofyear"></a>

###  firstFullWeekOfYear

▸ **firstFullWeekOfYear**(year: *`number`*): `Date`

*Defined in [first-full-week-of-year.ts:17](https://github.com/strong-roots-capital/first-full-week-of-year/blob/889b906/src/first-full-week-of-year.ts#L17)*

Returns the first week of `year` to be composed entirely of days in said year.

Note: this package assumes the first day of the week to be Monday.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| year | `number` |  The year of which to find the first full-week |

**Returns:** `Date`
The start of the Monday of the first full week of `year`

___

