import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todos{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 50})
    tarefa: string

    @Column({default: false})
    concluida: boolean
}