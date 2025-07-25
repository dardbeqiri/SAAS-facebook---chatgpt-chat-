import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.messagesService.findById(id);
  }

  @Post()
  async create(@Body() data: any) {
    return this.messagesService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.messagesService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.messagesService.delete(id);
  }
}
