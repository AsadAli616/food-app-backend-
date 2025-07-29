import { Exclude } from 'class-transformer';
import { UserROLE } from 'src/eums/user.enum';
import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/user/entities/user.entity';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false, length: 100, type: 'varchar' })
  address: string;
  @Column({ nullable: false, length: 100, type: 'varchar' })
  city: string;
  @Column({ nullable: false, length: 100, type: 'varchar' })
  latitude: string;
  @Column({ nullable: false, length: 100, type: 'varchar' })
  longitude: string;
  @ManyToOne(() => User, (user: any) => user.addresses)
  user: User;
}
