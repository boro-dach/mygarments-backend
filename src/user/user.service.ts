import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { RegisterDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getByLogin(login: string) {
    const user = await this.prisma.user.findFirst({
      where: { login },
    });

    return user;
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    return user;
  }

  async create(dto: RegisterDto, token: string) {
    return this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        password: await hash(dto.password),
        accessToken: token,
        login: dto.login,
      },
    });
  }

  async updateToken(id: string, token: string) {
    await this.prisma.user.update({
      where: { id },
      data: { accessToken: token },
    });
  }
}
