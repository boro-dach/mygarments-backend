import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
