import { Request, NextFunction, Response } from 'express'

export const latestNotPersisted = (req: Request, res: Response) => {
  res.status(200).json({
    wod: {
      type: 'rest'
    }
  })
}
