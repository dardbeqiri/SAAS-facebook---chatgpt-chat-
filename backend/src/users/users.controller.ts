import { Controller, Get, Param, Body, Post, Patch, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles('superadmin', 'company_admin')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles('superadmin', 'company_admin')
  async findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Post()
  @Roles('superadmin', 'company_admin')
  async create(@Body() data: { email: string; password: string; role: string; companyId?: string }) {
    return this.usersService.create(data);
  }

  @Patch(':id')
  @Roles('superadmin', 'company_admin')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  @Roles('superadmin', 'company_admin')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
