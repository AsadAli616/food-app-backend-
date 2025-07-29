import { OrderOfProducts } from "src/order-of-product/entities/order-of-product.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, UpdateDateColumn } from "typeorm";
@Entity("orders")
export class Order {
    @Column({ type: 'int', primary: true, generated: true })
    id: number;
    @Column({ type: 'varchar', length: 255 })
    status: string;
    @Column({ type: 'decimal', precision: 10, scale: 2 ,nullable: true})
    price: number;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
    @ManyToOne(() => User, user => user.orders)
    user: User;
    @OneToMany(() => OrderOfProducts, orderOfProducts => orderOfProducts.order)
    orderOfProducts: OrderOfProducts[];
    
}
