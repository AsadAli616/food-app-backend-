import { OrderOfProducts } from 'src/order-of-product/entities/order-of-product.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column ,ManyToOne, OneToMany } from 'typeorm';


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
  @OneToMany(() => OrderOfProducts, (orderOfProducts:any) => orderOfProducts.item)
  orderOfProduct: OrderOfProducts[];

}
