import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';

import { join } from 'path';


@Module({
  imports: [
      MongooseModule.forRoot('mongodb://127.0.0.1:27017/todos', {connectionName: 'todos'}),
      GraphQLModule.forRoot({
          typePaths: ['./**/*.graphql'],
          definitions: {
              path: join(process.cwd(), 'src/graphql.schema.ts')
          }
      }),
      TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
