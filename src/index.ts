import Koa from 'koa'
import logger from 'koa-logger'
import router from './routes/tasks'
import bodyParser from 'koa-bodyparser'

const app = new Koa()

app.use(bodyParser())
app.use(router.routes())
app.use(logger())

app.listen(3000)

console.log('listening on port 3000')
