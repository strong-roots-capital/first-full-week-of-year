import firstFullWeekOfYear from '../src/first-full-week-of-year'

const d = new Date()
console.log(`First full week of current year ${d.getFullYear()}:`, firstFullWeekOfYear(d.getFullYear()))
