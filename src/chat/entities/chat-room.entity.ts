import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChatParticipent } from "./chat-participent";
import { ChatMessage } from "./chat-messages";

export class ChatRoom {
        @PrimaryGeneratedColumn()
        id: number;
        @Column({ type:"tinyint" })
        isActive: boolean;
        @OneToMany(() => ChatParticipent, chatParticipent => chatParticipent.chatRoom)
        chatParticipents: ChatParticipent[];
        @OneToMany(() => ChatMessage, chatMessage => chatMessage.chatRoom)
        chatMessages: ChatMessage[];
}
