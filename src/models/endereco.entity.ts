import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import User from './user.entity'

@Entity()
export default class Endereco extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  rua!: string

  @Column()
  cidade!: string
  
  @Column()
  estado!: string

  @Column()
  cep!: string

  @Column({name: 'user_id'})
  userId!: number

  @ManyToOne(() => User, user => user.enderecos)
  user!: User  
}