import moment, { Moment } from 'moment'

const DATE_DB_FORMAT = 'YYMMDD'

export const getWodIdFromMoment = (m: Moment = moment.utc()): number =>
  parseInt(m.format(DATE_DB_FORMAT), 10)
