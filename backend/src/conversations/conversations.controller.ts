import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { ConversationsService } from './conversations.service';

@Controller('conversations')
export class ConversationsController {
  constructor(private readonly conversationsService: ConversationsService) {}

  @Get()
  async findAll() {
    return this.conversationsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.conversationsService.findById(id);
  }

  @Post()
  async create(@Body() data: any) {
    return this.conversationsService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.conversationsService.update(id, data);
  }

  @Patch(':id/pause')
  async pause(@Param('id') id: string, @Body() data: { isPaused: boolean }) {
    return this.conversationsService.pause(id, data.isPaused);
  }
}
