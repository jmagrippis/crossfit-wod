import moment from 'moment'

const DATE_DB_FORMAT = 'YYMMDD'

export const getMomentFromWodId = (id: number) => moment.utc(id, DATE_DB_FORMAT)
