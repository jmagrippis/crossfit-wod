import { getMomentFromWodId } from './getMomentFromWodId'

const DATE_URL_FORMAT = 'YYYY/MM/DD'

export const getWodUrlFromId = (id: number) =>
  `https://www.crossfit.com/workout/${getMomentFromWodId(id).format(
    DATE_URL_FORMAT
  )}`
