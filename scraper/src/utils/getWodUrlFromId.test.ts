import { getWodUrlFromId } from './getWodUrlFromId'

describe('getWodUrlFromId', () => {
  it('returns a moment object with the correct year, month, and day, for the given id', () => {
    const id = 181116
    const result = getWodUrlFromId(id)

    expect(result).toBe('https://www.crossfit.com/workout/2018/11/16')
  })
})
