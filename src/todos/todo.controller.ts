import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): any {
    return this.todoService.findAll();
  }

  @Post()
  addTodo(
    @Body('title') todoTitle: string,
    @Body('description') todoDescription: string,
  ): any {
    return this.todoService.create(todoTitle, todoDescription);
  }

  @Get(':search')
  getTodoByTitle(@Query('title') todoTitle: string): any {
    return this.todoService.findContainOne(todoTitle);
  }

  @Get(':search')
  getTodoByDescription(@Query('desc') todoDesc: string): any {
    return this.todoService.findContainOne(todoDesc);
  }

  //   @Delete(':id')
  //   deleteTodoById(@Param('id') todoId: string): any {
  //     return this.todoService.deleteById(todoId);
  //   }

  //   @Patch(':id')
  //   updateTodoById(
  //     @Param('id') todoId: string,
  //     @Body('title') todoTitle: string,
  //     @Body('description') todoDescription: string,
  //   ): any {
  //     return this.todoService.UpdateById(todoId, todoTitle, todoDescription);
  //   }
}
