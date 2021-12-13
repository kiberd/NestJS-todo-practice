import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
      MongooseModule.forRoot('mongodb://127.0.0.1:27017/todos', {connectionName: 'todos'}),
      TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
