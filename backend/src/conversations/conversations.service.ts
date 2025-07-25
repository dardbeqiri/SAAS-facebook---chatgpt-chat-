import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ConversationsService {
  async findAll() {
    return prisma.conversation.findMany({ include: { messages: true } });
  }

  async findById(id: string) {
    return prisma.conversation.findUnique({ where: { id }, include: { messages: true } });
  }

  async create(data: any) {
    return prisma.conversation.create({ data });
  }

  async update(id: string, data: any) {
    return prisma.conversation.update({ where: { id }, data });
  }

  async pause(id: string, isPaused: boolean) {
    return prisma.conversation.update({ where: { id }, data: { isPaused } });
  }
}
