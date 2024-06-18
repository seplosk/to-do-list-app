import { Injectable } from '@angular/core';

interface Todo {
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: Todo[] = [];

  getTasks(): Todo[] {
    return this.tasks;
  }

  addTask(title: string, description?: string): void {
    this.tasks.push({
      title,
      description,
      completed: false,
      createdAt: new Date()
    });
    this.saveTasks();
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  toggleTaskCompletion(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }
}
