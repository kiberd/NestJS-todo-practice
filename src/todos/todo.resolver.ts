import { Resolver, Query, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from '../graphql.schema';

@Resolver('Todo')
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query()
  getAllTodos(): Todo[] {
    return this.todoService.findAll();
  }

  @Query()
  getStudentById(@Args('id') id: string):Todo{
      return this.todoService.findContainOne(id);
  }
}