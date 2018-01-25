import {Request, Response, NextFunction} from 'express'

declare module 'express' {
  interface RequestContext {}

  interface Request {
    ctx: RequestContext
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
