import { ITaskRepo } from './taskrepo'
import { Task } from '../models/tasks'

export class InMemoryTaskRepo implements ITaskRepo {
  private tasks: Task[] = []
  private nextId = 1

  async getAll(): Promise<Task[]> {
    return this.tasks
  }

  async get(taskId: number): Promise<Task> {
    const task = this.tasks.find(t => t.id === taskId)

    if (!task) {
      throw new Error('Unknown task id')
    }

    return task
  }

  async create(task: Task): Promise<Task> {
    task.id = this.nextId
    this.nextId++

    this.tasks.push(task)

    return task
  }

  async update(taskId: number, task: Task): Promise<Task> {
    const taskToUpdate = this.tasks.find(t => t.id === taskId)

    if (!task) {
      throw new Error('Unknown task id')
    }

    return { ...taskToUpdate, ...task }
  }

  async delete(taskId: number): Promise<Task> {
    const idx = this.tasks.findIndex(t => t.id === taskId)
    const task = this.tasks[idx]

    this.tasks = this.tasks.filter(t => t.id !== taskId)

    return task
  }
}
