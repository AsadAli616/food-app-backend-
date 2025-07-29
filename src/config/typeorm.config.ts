import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Address } from 'src/address/entities/address.entity';
import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/user/entities/user.entity';

const entities = [User, Item, Address];
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
