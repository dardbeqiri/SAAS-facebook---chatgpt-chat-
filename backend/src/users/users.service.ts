import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async findAll() {
    return prisma.user.findMany({ include: { company: true } });
  }

  async findById(id: string) {
    return prisma.user.findUnique({ where: { id }, include: { company: true } });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email }, include: { company: true } });
  }

  async create(data: { email: string; password: string; role: string; companyId?: string }) {
    return prisma.user.create({ data });
  }

  async update(id: string, data: any) {
    return prisma.user.update({ where: { id }, data });
  }

  async delete(id: string) {
    return prisma.user.delete({ where: { id } });
  }
}
