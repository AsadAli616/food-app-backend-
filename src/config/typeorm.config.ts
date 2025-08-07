import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Address } from 'src/address/entities/address.entity';
import { ChatMessage } from 'src/chat/entities/chat-messages';
import { ChatParticipent } from 'src/chat/entities/chat-participent';
import { ChatRoom } from 'src/chat/entities/chat-room.entity';
import { Item } from 'src/items/entities/item.entity';
import { OrderOfProducts } from 'src/order-of-product/entities/order-of-product.entity';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/user/entities/user.entity';

const entities = [
  User,
  Item,
  Address,
  Order,
  OrderOfProducts,
  ChatParticipent,
  ChatMessage,
  ChatRoom,
];
export const typeOrmConfig = (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT ?? '3306'),
  username: 'root',
  password: '',
  database: 'food-app',

  entities: entities,
  synchronize: true,
});
//  process.env.APP_ENV === 'development'
