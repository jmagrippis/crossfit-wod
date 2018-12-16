import { Request, Response } from 'express'
import puppeteer from 'puppeteer'
import moment from 'moment'

import { getWodIdFromMoment } from '../utils/getWodIdFromMoment'
import { getWodUrlFromId } from '../utils/getWodUrlFromId'
import { getImageFromPage } from './getImageFromPage'
import { getWodTypeFromPage } from './getWodTypeFromPage'

export const latestNotPersisted = async (req: Request, res: Response) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    const id = getWodIdFromMoment()
    // TODO: check if WOD already persisted

    const url = getWodUrlFromId(id)
    await page.goto(url)

    const image = await getImageFromPage(page)
    const type = await getWodTypeFromPage(page)

    await browser.close()
    res.status(201).json({
      wod: {
        id,
        type,
        image
      }
    })
  } catch (err) {
    console.log(err)

    try {
      // you can probably not write in Google App Engine, so this will probably fail
      await page.screenshot({ path: `screenshots/${moment().valueOf()}.png` })
    } catch (err) {
      // shallow error
    }

    res.status(200).json({
      error: err.message
    })
    return
  }
}
