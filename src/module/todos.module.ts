import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodosController } from "src/controller/todos.controller";
import { Todos } from "src/entity/todos.entity";
import { TodosService } from "src/service/todos.service";

@Module({
    imports: [TypeOrmModule.forFeature([Todos])],
    controllers: [TodosController],
    providers: [TodosService]
})
export class TodosModule{}