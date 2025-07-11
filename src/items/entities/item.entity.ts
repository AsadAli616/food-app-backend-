import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column ,ManyToOne } from 'typeorm';


@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: true , type:"boolean"})
  isAvailable: boolean;

  @Column({ nullable: true })
  imageUrl: string;
  
  @ManyToOne(() => User, (user:any) => user.items)
  user: User;


}
