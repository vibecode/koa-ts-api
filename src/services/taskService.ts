import { ITaskRepo } from '../repos/taskrepo'
import { InMemoryTaskRepo } from '../repos/inMemoryTaskRepo'
import { Task } from '../models/tasks'

export class TaskService {
  private taskRepo: ITaskRepo

  constructor(taskRepo: ITaskRepo) {
    this.taskRepo = taskRepo
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.taskRepo.getAll()
  }

  async getTask(id: number): Promise<Task> {
    return await this.taskRepo.get(id)
  }

  async createTask(task: Task): Promise<Task> {
    return await this.taskRepo.create(task)
  }

  async updateTask(id: number, task: Task): Promise<Task> {
    return await this.taskRepo.update(id, task)
  }

  async deleteTask(id: number): Promise<Task> {
    return await this.taskRepo.delete(id)
  }
}
