import { Module } from '@nestjs/common';
import { ChatgptController } from './chatgpt.controller';
import { ChatgptService } from './chatgpt.service';

@Module({
  controllers: [ChatgptController],
  providers: [ChatgptService],
  exports: [ChatgptService],
})
export class ChatgptModule {}
