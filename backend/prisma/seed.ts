import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('adminpassword', 10);

  const company = await prisma.company.create({
    data: {
      name: 'Demo Company',
      billingStatus: 'active',
    },
  });

  await prisma.user.create({
    data: {
      email: 'superadmin@example.com',
      password,
      role: 'superadmin',
    },
  });

  await prisma.user.create({
    data: {
      email: 'admin@demo.com',
      password,
      role: 'company_admin',
      companyId: company.id,
    },
  });

  await prisma.user.create({
    data: {
      email: 'user@demo.com',
      password,
      role: 'user',
      companyId: company.id,
    },
  });

  console.log('Seed complete!');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
