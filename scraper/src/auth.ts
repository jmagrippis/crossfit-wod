import { Request, NextFunction, Response } from 'express'

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (
    process.env.NODE_ENV === 'production' &&
    !req.header('X-Appengine-Cron')
  ) {
    res.status(401).json({ error: 'Authentication required' })
    return
  }

  next()
}
