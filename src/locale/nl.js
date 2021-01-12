import { CUR_YEAR, UPPER_LIMIT_YEAR } from '../constant/filed'

export default {
  common: {
    from: 'Van',
    fromThe: 'Van',
    start: ' Begin ',
    every: 'Per ',
    between: '',
    and: ' Naar ',
    end: ' ',
    specified: 'Gespecificeerd',
    symbolTip: 'Symbool ',
    valTip: 'Waarde ',
    nearest: ' Dichtstbijzijnde',
    current: 'Huidige ',
    nth: ' De',
    index: 'th ',
    placeholder: 'Selecteer',
    placeholderMulti: '(Meerkeuze) selectie',
    help: 'Helpen',
    wordNumError: '6 of 7 woorden nodig',
    reverse: 'Omgekeerde',
    reset: 'Reset',
    tagError: 'Tagfout ',
    numError: 'Nummerfout ',
    use: 'Gebruik',
    inputPlaceholder: 'Cron-expressie'
  },
  custom: {
    unspecified: 'Niet gespecificeerd',
    workDay: ' Werkdag',
    lastTh: ' Laatste',
    lastOne: ' Laatste',
    latestWorkday: ' Laatste werkdag',
    empty: 'Leeg'
  },
  second: {
    title: 'Tweede',
    val: '0 1 2...59'
  },
  minute: {
    title: 'Minuut',
    val: '0 1 2...59'
  },
  hour: {
    title: 'Uur',
    val: '0 1 2...23'
  },
  dayOfMonth: {
    timeUnit: 'Dag',
    title: 'Dag',
    val: '1 2...31'
  },
  month: {
    title: 'Maand',
    val: '1 2...12 or JAN ... DEC'
  },
  dayOfWeek: {
    timeUnit: 'Dag',
    title: 'Week',
    val: '1 2...7 or ZO ... ZA',
    SUN: 'Zondag',
    MON: 'Maandag',
    TUE: 'Dinsdag',
    WED: 'Woensdag',
    THU: 'Donderdag',
    FRI: 'Vrijdag',
    SAT: 'Zaterdag'
  },
  year: {
    title: 'Jaar',
    val: CUR_YEAR + ' ... ' + UPPER_LIMIT_YEAR
  },
  period: {
    startError: 'Start is fout',
    cycleError: 'Cyclus is fout'
  },
  range: {
    lowerError: 'Lager is fout',
    upperError: 'Bovenste is fout',
    lowerBiggerThanUpperError: 'Lager moet kleiner zijn dan Boven'
  },
  weekDay: {
    weekDayNumError: 'Het weeknummer is fout',
    nthError: 'De dag in de week is een fout'
  },
  app: {
    title: 'Cron Generator geïmplementeerd door Vue.js en Element-ui'
  }
}
