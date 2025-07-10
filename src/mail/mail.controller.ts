// src/mail/mail.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post()
  async sendTestEmail(@Body() body: { to: string }) {
    return this.mailService.sendEmail(
      body.to,
      'Test Subject',
      'This is a test email from NestJS.'
    );
  }
}
