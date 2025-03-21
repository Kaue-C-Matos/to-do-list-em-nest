import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import { DataSource } from "typeorm";
import { Todos } from "./entity/todos.entity";
import { TodosModule } from "./module/todos.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "todolist",
      entities: [Todos],
      synchronize: true
    }),
    TodosModule
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}