import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
export interface TokenPayload {
    role: 'USER' | 'ADMIN';
    login: string;
}
export declare class AuthService {
    private readonly jwt;
    private readonly user;
    private readonly prisma;
    constructor(jwt: JwtService, user: UserService, prisma: PrismaService);
    issueToken({ role, login }: TokenPayload): string;
    private validate;
    register(dto: RegisterDto): Promise<{
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
    login(dto: LoginDto): Promise<{
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
}
