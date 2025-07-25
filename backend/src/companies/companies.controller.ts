import { Controller, Get, Param, Body, Post, Patch, Delete, UseGuards } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('companies')
@UseGuards(RolesGuard)
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  @Roles('superadmin')
  async findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  @Roles('superadmin', 'company_admin')
  async findById(@Param('id') id: string) {
    return this.companiesService.findById(id);
  }

  @Post()
  @Roles('superadmin')
  async create(@Body() data: { name: string }) {
    return this.companiesService.create(data);
  }

  @Patch(':id')
  @Roles('superadmin')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.companiesService.update(id, data);
  }

  @Delete(':id')
  @Roles('superadmin')
  async delete(@Param('id') id: string) {
    return this.companiesService.delete(id);
  }

  @Patch(':companyId/billing-status')
  @Roles('superadmin')
  async updateBillingStatus(
    @Param('companyId') companyId: string,
    @Body() dto: { billingStatus: 'active' | 'pending' | 'suspended' },
  ) {
    return this.companiesService.updateBillingStatus(companyId, dto.billingStatus);
  }
}
