import Router from 'koa-router'
import { text } from 'body-parser'
import { TaskService } from '../services/taskService'
import { InMemoryTaskRepo } from '../repos/inMemoryTaskRepo'
import { Task } from '../models/tasks'

const router = new Router()
const taskService = new TaskService(new InMemoryTaskRepo())

router.get('/tasks', async ctx => {
  const tasks = await taskService.getAllTasks()

  ctx.status = 200
  ctx.body = tasks
})

router.get('/tasks:id', async ctx => {
  try {
    const task = await taskService.getTask(parseInt(ctx.params.id))
    ctx.status = 200
    ctx.body = task
  } catch (err) {
    ctx.throw(404)
  }
})

router.post('/tasks', async ctx => {
  const task = <Task>ctx.request.body
  const newTask = await taskService.createTask(task)

  ctx.status = 201
  ctx.body = newTask
  ctx.set('location', `http://localhost:3000/tasks/${newTask.id}`)
})

router.put('/tasks/:id', async ctx => {
  const task = <Task>ctx.request.body
  const id = parseInt(ctx.params.id)

  try {
    const updatedTask = await taskService.updateTask(id, task)
    ctx.body = updatedTask
    ctx.status = 200
  } catch (err) {
    ctx.throw(404)
  }
})

router.delete('/tasks/:id', async ctx => {
  try {
    const id = parseInt(ctx.params.id)
    const deletedTask = await taskService.deleteTask(id)

    ctx.body = deletedTask
    ctx.status = 200
  } catch (err) {
    ctx.throw(404)
  }
})

export default router
