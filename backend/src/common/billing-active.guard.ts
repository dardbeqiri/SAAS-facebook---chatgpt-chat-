import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class BillingActiveGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user?.companyId) return true; // Superadmin, etc.
    const company = await prisma.company.findUnique({ where: { id: user.companyId } });
    if (!company || company.billingStatus !== 'active') {
      throw new ForbiddenException('Your company is not active for billing. Please contact admin.');
    }
    return true;
  }
}
