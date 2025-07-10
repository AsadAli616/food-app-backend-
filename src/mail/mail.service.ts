// src/mail/mail.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Or your email service provider
      port: 465,
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.APP_PASS, // NOT your Gmail password
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    const info = await this.transporter.sendMail({
      from: '"asadali428@killergmail.com',
      to,
      subject,
      text,
      // html: '<b>Hello world?</b>' // optional
    });

    console.log('Message sent: %s', info.messageId);
    return info;
  }
}
