import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-role.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({ example: "1", description: "Уникальный индентификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "user@mail.ru", description: "Email пользователя" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "12345678", description: "Password пользователя" })
  @Column({ type: DataType.STRING, allowNull: true })
  password: string;

  @ApiProperty({ example: true , description: 'Забанен или нет'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: string;

  @ApiProperty({ example: 'За хулиганство', description: "Причина - забанен за хулиганство" })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}

