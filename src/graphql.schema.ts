export interface Todo {
    _id?: string;
    Title?: string;
    Description?: string;
}

export interface IQuery {
    getAllTodos(): Todo[] | Promise<Todo[]>;
    getTodoById(id: String): Todo | Promise<Todo>;
}