import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ChatRoom } from "./chat-room.entity";

export class ChatMessage {
        @PrimaryGeneratedColumn()
        id: number;
        @Column({ type: "text" })
        content: string;
        @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
        createdAt: Date;
        @Column({ type: "int" })
        senderId: number;
        @ManyToOne(() => ChatRoom, chatRoom => chatRoom.id)
        chatRoom: ChatRoom;
}
