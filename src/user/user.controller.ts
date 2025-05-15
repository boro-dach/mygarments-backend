import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(200)
  @Post('get-name')
  async getName(@Body() id: string) {
    const name = await this.userService.getName(id);

    return name;
  }
}
