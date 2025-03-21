import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTodoDto, UpdateTodoDto } from "src/dto/todos.dto";
import { Todos } from "src/entity/todos.entity";
import { Repository } from "typeorm";

@Injectable()
export class TodosService{
    constructor(
        @InjectRepository(Todos)
        private readonly todosRepository: Repository<Todos>
    ) {}

    async listaTodos(): Promise<Todos[]>{
        return this.todosRepository.find()
    }

    async listaTodosId(id: number): Promise<Todos>{
        const todo = await this.todosRepository.findOneBy({id})
        if(!todo){
            return null
        }
        return todo
    }

    async cadastraTodos(todosData: CreateTodoDto): Promise<Todos>{
        const todo = this.todosRepository.create(todosData)
        return this.todosRepository.save(todo)
    }

    async alteraTodos(id: number, todosData: UpdateTodoDto){
        await this.todosRepository.update(id, todosData)
        return this.listaTodosId(id)
    }

    async apagaTodos(id: number){
        await this.todosRepository.delete(id)
        return this.listaTodosId(id)
    }
}