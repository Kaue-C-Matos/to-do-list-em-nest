import { IsBoolean, IsOptional, IsString, Length } from "class-validator";

export class CreateTodoDto{
    @IsString()
    @Length(5, 50)
    tarefa: string

    @IsOptional()
    @IsBoolean()
    concluida: boolean = false
}

export class UpdateTodoDto{
    @IsOptional()
    @IsString()
    @Length(5, 50)
    tarefa: string

    @IsOptional()
    @IsBoolean()
    concluida: boolean = false
}