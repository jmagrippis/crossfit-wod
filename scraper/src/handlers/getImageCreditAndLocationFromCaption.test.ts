import { getImageCreditAndLocationFromCaption } from './getImageCreditAndLocationFromCaption'

describe('getImageCreditAndLocationFromCaption', () => {
  it('returns the correct credit', () => {
    const caption =
      'Morgan of <a href="http://www.carsoncitycrossfit.com/" target="_blank">Carson City CrossFit</a>'
    const result = getImageCreditAndLocationFromCaption(caption)

    expect(result.credit).toBe('Morgan')
  })

  it('returns the correct url for the location', () => {
    const caption =
      'Morgan of <a href="http://www.carsoncitycrossfit.com/" target="_blank">Carson City CrossFit</a>'
    const result = getImageCreditAndLocationFromCaption(caption)

    expect(result.location.url).toBe('http://www.carsoncitycrossfit.com/')
  })

  it('returns the correct name for the location', () => {
    const caption =
      'Morgan of <a href="http://www.carsoncitycrossfit.com/" target="_blank">Carson City CrossFit</a>'
    const result = getImageCreditAndLocationFromCaption(caption)

    expect(result.location.name).toBe('Carson City CrossFit')
  })
})
