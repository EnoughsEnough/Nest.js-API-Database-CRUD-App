import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru' , description: 'Email пользователя'})

  readonly email: string
  @ApiProperty({ example: '12345678' , description: 'Password пользователя'})

  readonly password: string
}
