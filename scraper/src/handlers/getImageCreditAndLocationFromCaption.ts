const REGEX_LOCATION_URL = /<a href="([^"]+)/
const REGEX_LOCATION_NAME = />([^<]+)/

export const getImageCreditAndLocationFromCaption = (caption: string) => {
  const credit = caption.substr(0, caption.indexOf(' of <a'))

  const [, url] = caption.match(REGEX_LOCATION_URL)

  const [, name] = caption.match(REGEX_LOCATION_NAME)
  return {
    credit,
    location: {
      url,
      name
    }
  }
}
