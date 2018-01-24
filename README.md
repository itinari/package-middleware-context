# middleware-context

Add custom context to req

## Usage

```typescript
import * as express from 'express'
import {Request, Response, NextFunction} from 'express'
import context from '@itinari/middleware-context'

const app = express()

app.use(
  context({
    foo: 'bar',
  })
)

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.ctx.foo)
})
```
