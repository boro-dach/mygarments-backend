import { Roles } from 'generated/prisma';
export declare const ROLES_KEY = "roles";
export declare const Role: (...roles: Roles[]) => import("@nestjs/common").CustomDecorator<string>;
