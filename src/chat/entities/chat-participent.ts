import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChatRoom } from "./chat-room.entity";

export class ChatParticipent {
        @PrimaryGeneratedColumn()
        id: number;
        @Column({ type:"tinyint" })
        userId: number;
        @ManyToOne(() => ChatRoom, chatRoom => chatRoom.id)
        chatRoom: ChatRoom;
}
