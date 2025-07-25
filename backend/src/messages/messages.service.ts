import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class MessagesService {
  async findAll() {
    return prisma.message.findMany();
  }

  async findById(id: string) {
    return prisma.message.findUnique({ where: { id } });
  }

  async create(data: any) {
    return prisma.message.create({ data });
  }

  async update(id: string, data: any) {
    return prisma.message.update({ where: { id }, data });
  }

  async delete(id: string) {
    return prisma.message.delete({ where: { id } });
  }
}
