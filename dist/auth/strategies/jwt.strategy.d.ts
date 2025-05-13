import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private config;
    private user;
    constructor(config: ConfigService, user: UserService);
    validate({ login }: {
        login: string;
    }): Promise<{
        id: string;
        login: string;
        role: import("generated/prisma").$Enums.Roles;
    }>;
}
export {};
