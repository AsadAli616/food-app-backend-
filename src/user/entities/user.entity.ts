import { Exclude } from 'class-transformer';
import { UserROLE } from 'src/eums/user.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true , nullable: false , length: 100 ,type: 'varchar'})
  email: string;
  @Column({ nullable: false , length: 100 ,type: 'varchar'})
  @Exclude()
  password: string;
  @Column({default: UserROLE.USER ,enum:UserROLE ,nullable:true ,type:"enum"})
  role: UserROLE;
  @Column({ default: true , type: 'boolean' })
  isActive: boolean;
  @Column({ default: false , type: 'boolean' })
  isEmailVerified: boolean;
  @Column({ default: null , length: 100 ,type: 'varchar'})
  CardId: string;
  @Column({ default: null , length: 100 ,type: 'varchar'})
  CustomerId: string;
  @Column({ default: null , type: 'varchar' ,nullable:false })
  phoneNumber: string;
  @Column({ default: null , type: 'varchar' , nullable: true})
  profilePicture: string;
  @Column({ default: null , length: 100 ,type: 'varchar',nullable: false })
  full_Name: string;
  @Column({ default: null , type: 'varchar', nullable: false })
  dateOfBirth: string;
  @Column({ default: null, nullable: true })
  code:number
  }