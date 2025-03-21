import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Response } from "@nestjs/common";
import { CreateTodoDto, UpdateTodoDto } from "src/dto/todos.dto";
import { Todos } from "src/entity/todos.entity";
import { TodosService } from "src/service/todos.service";

@Controller('todos')
export class TodosController{
    constructor(private readonly todosService: TodosService){}

    @Get()
    getTodos(): Promise<Todos[]>{
        console.log('Rota GET /todos foi chamada');
        return this.todosService.listaTodos();
    }

    @Get("/:id")
    async getTodoid(@Param('id') id: number): Promise<Todos>{
        const todo = await this.todosService.listaTodosId(id)
        if (todo == null){
            throw new NotFoundException("Tarefa não encontrada, por favor verifique o ID")
        }
        return todo
    } 

    @Post()
    postTodos(@Body() todosData: CreateTodoDto): Promise<Todos>{
        return this.todosService.cadastraTodos(todosData)
    }

    @Put("/:id")
    async putTodo(@Param('id') id: number, @Body() todosData: UpdateTodoDto): Promise<Todos>{
        const todo = await this.todosService.alteraTodos(id, todosData)
        if (todo == null){
            throw new NotFoundException("Tarefa não encontrada, por favor verifique o ID")
        }
        return todo
    }

    @Delete("/:id")
    async deleteTodos(@Param('id')id: number, @Response() res){
        const todo = await this.todosService.listaTodosId(id)
        if (todo == null) {
            throw new NotFoundException("Tarefa não encontrada, por favor verifique o ID")
        }
        await this.todosService.apagaTodos(id)
        return res.status(HttpStatus.OK).json("Tarefa deletada com sucesso")

    }
}