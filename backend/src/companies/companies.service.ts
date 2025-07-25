import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CompaniesService {
  async findAll() {
    return prisma.company.findMany({ include: { users: true, messengerAccounts: true } });
  }

  async findById(id: string) {
    return prisma.company.findUnique({ where: { id }, include: { users: true, messengerAccounts: true } });
  }

  async create(data: { name: string }) {
    return prisma.company.create({ data });
  }

  async update(id: string, data: any) {
    return prisma.company.update({ where: { id }, data });
  }

  async delete(id: string) {
    return prisma.company.delete({ where: { id } });
  }

  async updateBillingStatus(companyId: string, status: string) {
    return prisma.company.update({
      where: { id: companyId },
      data: { billingStatus: status },
    });
  }
}
