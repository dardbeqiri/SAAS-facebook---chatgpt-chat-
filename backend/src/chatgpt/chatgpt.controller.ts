import { Controller, Post, Body } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) {}

  @Post('reply')
  async reply(@Body() body: { apiKey: string; prompt: string }) {
    const content = await this.chatgptService.getChatgptReply(body.apiKey, body.prompt);
    return { content };
  }
}
