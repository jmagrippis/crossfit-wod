import { Page } from 'puppeteer'
import { getImageCreditAndLocationFromCaption } from './getImageCreditAndLocationFromCaption'

export const getImageFromPage = async (page: Page) => {
  const url = await page.$eval('.media-photo-container a', (el) =>
    el.getAttribute('href')
  )

  const caption = await page.$eval(
    '.media-photo-container .caption p',
    (el) => el.innerHTML
  )
  const { credit, location } = getImageCreditAndLocationFromCaption(caption)

  return { url, credit, location }
}
