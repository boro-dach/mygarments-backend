import { IsEmail, IsString, Length, Min } from 'class-validator';

export class RegisterDto {
  @IsString()
  @Min(4)
  @Length(16)
  login: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Min(6)
  password: string;

  @IsString()
  name: string;
}

export class LoginDto {
  @IsString()
  @Min(4)
  @Length(16)
  login: string;

  @IsString()
  @Min(6)
  password: string;
}
