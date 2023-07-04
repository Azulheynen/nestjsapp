import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity('user_profile')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  age: number;
}
