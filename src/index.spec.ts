import 'chai-as-promised'
import {expect} from 'chai'

import context from '.'

describe('Context', () => {
  it('should be a factory', () => {
    expect(context).a('function')
    expect(context()).a('function')
  })

  it('should set req.ctx to an empty object', () => {
    const req: any = {}
    const res: any = {}

    return new Promise((resolve, _reject) => {
      context()(req, res, () => {
        expect(req).haveOwnProperty('ctx')
        expect(req.ctx).deep.equals({})
        resolve()
      })
    })
  })

  it('should set req.ctx to default context', () => {
    const req: any = {}
    const res: any = {}
    const defaultContext = {foo: 'bar'}

    return new Promise((resolve, _reject) => {
      context(defaultContext)(req, res, () => {
        expect(req).haveOwnProperty('ctx')
        expect(req.ctx).deep.equals(defaultContext)
        resolve()
      })
    })
  })
})
