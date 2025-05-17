import { BadRequestException } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getByLogin(login: string): Promise<{
        login: string;
        email: string;
        password: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("generated/prisma").$Enums.Roles;
        accessToken: string | null;
    } | null>;
    getByEmail(email: string): Promise<{
        login: string;
        email: string;
        password: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("generated/prisma").$Enums.Roles;
        accessToken: string | null;
    } | null>;
    create(dto: RegisterDto, token: string): Promise<{
        login: string;
        email: string;
        password: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        id: string;
        role: import("generated/prisma").$Enums.Roles;
        accessToken: string | null;
    }>;
    updateToken(id: string, token: string): Promise<void>;
    getName(id: string): Promise<string | BadRequestException>;
}
