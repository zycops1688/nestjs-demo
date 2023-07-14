import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column({ unique: true })
    username: string;

    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    password: string;
}
