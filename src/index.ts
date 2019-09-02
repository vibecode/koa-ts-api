import Koa from 'koa'
import logger from 'koa-logger'
import router from './routes/tasks'

const app = new Koa()

app.use(router.routes())
app.use(logger())

app.listen(3000)

console.log('listening on port 3000')
