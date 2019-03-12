import {Request, Response, NextFunction, RequestHandler} from 'express'

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RequestContext {}

    interface Request {
      ctx: RequestContext
    }
  }
}

export default function context(defaultContext = {}): RequestHandler {
  return function(req: Request, _res: Response, next: NextFunction) {
    if (!req.ctx) {
      req.ctx = Object.assign({}, defaultContext)
    }
    return next()
  }
}
