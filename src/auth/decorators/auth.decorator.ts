import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Roles } from 'generated/prisma';
import { Role } from './roles.decorator';
import { RolesGuard } from '../guards/roles.guard';

export const Auth = (...roles: Roles[]) => {
  return applyDecorators(Role(...roles), UseGuards(JwtAuthGuard, RolesGuard));
};
