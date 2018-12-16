import { Page } from 'puppeteer'

const REGEX_WOD_TYPE = /post (.+) to comments/

export const getWodTypeFromContent = (content: string) => {
  if (content.indexOf('rest day') === 0) return 'rest'

  const [, type] = content.match(REGEX_WOD_TYPE)

  return type.split(' ')[0]
}

export const getWodTypeFromPage = async (page: Page) => {
  const content = await page.$eval('.body .content', (el) =>
    el.textContent
      .trim()
      .replace(/ {2,}/g, ' ')
      .toLowerCase()
  )
  return getWodTypeFromContent(content)
}
