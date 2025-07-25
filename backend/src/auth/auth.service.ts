import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
      return { ...user, password: undefined };
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, role: user.role, companyId: user.companyId };
    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }

  async register(email: string, password: string, role: string, companyId?: string) {
    const hash = await bcrypt.hash(password, 10);
    return prisma.user.create({
      data: { email, password: hash, role, companyId },
    });
  }
}
