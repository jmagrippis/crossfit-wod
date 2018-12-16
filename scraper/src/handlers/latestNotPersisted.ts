import { Request, Response } from 'express'
import puppeteer from 'puppeteer'
import moment from 'moment'

import { getWodIdFromMoment } from '../utils/getWodIdFromMoment'
import { getWodUrlFromId } from '../utils/getWodUrlFromId'
import { getImageFromPage } from './getImageFromPage'

export const latestNotPersisted = async (req: Request, res: Response) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  try {
    const id = getWodIdFromMoment()
    // TODO: check if WOD already persisted

    const url = getWodUrlFromId(id)
    console.log(url)
    await page.goto(url)

    const image = await getImageFromPage(page)

    await browser.close()
    res.status(201).json({
      wod: {
        type: 'rest',
        image
      }
    })
  } catch (err) {
    console.log(err)
    await page.screenshot({ path: `${moment().valueOf()}.png` })
    res.status(200).json({
      error: err.message
    })
    return
  }
}
