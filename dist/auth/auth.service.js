"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const argon2 = require("argon2");
const prisma_service_1 = require("../prisma.service");
let AuthService = class AuthService {
    jwt;
    user;
    prisma;
    constructor(jwt, user, prisma) {
        this.jwt = jwt;
        this.user = user;
        this.prisma = prisma;
    }
    issueToken({ role, login }) {
        const token = this.jwt.sign({ role, login }, {
            expiresIn: '7d',
        });
        return token;
    }
    async validate(dto) {
        const user = await this.user.getByLogin(dto.login);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const isValidPassword = await argon2.verify(user.password, dto.password);
        if (!isValidPassword)
            throw new common_1.UnauthorizedException('Wrong password');
        return user;
    }
    async register(dto) {
        const oldUser = await this.user.getByLogin(dto.login);
        if (oldUser)
            throw new common_1.BadRequestException('User already exists');
        const token = this.issueToken({
            role: 'USER',
            login: dto.login,
        });
        const user = await this.user.create(dto, token);
        return user;
    }
    async login(dto) {
        const user = await this.validate(dto);
        const token = this.issueToken({
            role: user.role,
            login: dto.login,
        });
        await this.user.updateToken(user.id, token);
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_service_1.UserService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map