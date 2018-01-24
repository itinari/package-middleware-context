import {Request, Response, NextFunction} from 'express'

declare module 'express' {
  interface Request {
    ctx: {}
  }
}

export default function context(defaultContext = {}) {
  return function(req: Request, _res: Response, next: NextFunction) {
    if (!req.ctx) {
      req.ctx = Object.assign({}, defaultContext)
    }
    return next()
  }
}
