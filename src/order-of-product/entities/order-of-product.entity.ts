import { Item } from "src/items/entities/item.entity";
import { Order } from "src/order/entities/order.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity("order_of_products")
export class OrderOfProducts {
@Column({ type: 'int', primary: true, generated: true })
id: number;
@Column({ type: 'int', nullable: false })
productId: number;
@Column({ type: 'int', nullable: false })
quantity: number;
@Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
price: number;
@ManyToOne(() => Order, (order) => order.orderOfProducts, { nullable: false })
order: Order;
@ManyToOne(() => Item, (item) => item.orderOfProduct, { nullable: false })
item: Item;
}

