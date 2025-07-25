import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { MessengerModule } from './messenger/messenger.module';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    CompaniesModule,
    MessengerModule,
    ChatgptModule,
    ConversationsModule,
    MessagesModule,
    AuditModule,
  ],
})
export class AppModule {}
