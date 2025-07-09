import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";

const entities = [
  User
];
export const typeOrmConfig = (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: "localhost",
  port: parseInt(process.env.DB_PORT ?? '3306'),
  username:"root",
  password:"123456",
  database:"food-app",

  entities: entities,
  synchronize: process.env.APP_ENV === 'development',
})