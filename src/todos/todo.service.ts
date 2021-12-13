import { Injectable, NotFoundException } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from 'src/schemas/todo.schema';
import { CreateTodoDto } from './create-todo.dto';

import { generate } from 'shortid';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(todoTitle: string, todoDescription: string): Promise<Todo> {
    const date = new Date();
    const newTodo = new CreateTodoDto(date, todoTitle, todoDescription);

    const createdTodo = new this.todoModel(newTodo);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findContainOne(title: string): Promise<Todo[]> {

    const todoIndex = this.todoModel.find({ todoTitle: { $regex: title } });
    if (todoIndex === undefined) {
      throw new NotFoundException();
    }
    return todoIndex;
  }

  //   deleteById(id: string): any {
  //     // const index = this.todosDb.findIndex(elem => elem.id === id);
  //     // if (index === -1) {
  //     //   throw new NotFoundException();
  //     // }
  //     // this.todosDb.splice(index);
  //     // return { message: 'Todo Deleted' };

  //     return null;
  //   }

  //   UpdateById(id: string, todoTitle: string, todoDescription: string): any {
  //     // const index = this.todosDb.findIndex(elem => elem.id === id);
  //     // if (index === -1) {
  //     //   throw new NotFoundException();
  //     // }
  //     // const singleTodo = this.todosDb[index];
  //     // if (todoTitle) {
  //     //   singleTodo.todoTitle = todoTitle;
  //     // } else if (todoDescription) {
  //     //   singleTodo.todoDescription = todoDescription;
  //     // }
  //     // this.todosDb[index] = singleTodo
  //     // return { message: 'Todo Updated' };

  //     return null;
  //   }
}
