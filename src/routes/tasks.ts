import Router from 'koa-router'
import { text } from 'body-parser'

const router = new Router()

router.get('/tasks', async ctx => (ctx.body = 'All tasks here'))

router.get(
  '/tasks:id',
  async ctx => (ctx.body = 'Task with id ' + ctx.params.id)
)

router.post('/tasks', async ctx => {
  ctx.body = 'Creates a  new task'
})

router.put('/task/:id', async ctx => {
  ctx.body = 'Updates task with id ' + ctx.params.id
})

router.delete('/task/:id', async ctx => {
  ctx.body = 'Deletes task with id ' + ctx.params.id
})

export default router
