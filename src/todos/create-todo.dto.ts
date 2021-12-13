export class CreateTodoDto {
    constructor(
      public date: Date,
      public todoTitle: string,
      public todoDescription: string,
    ) {}
  }