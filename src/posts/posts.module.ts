import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/users.model";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-role.model";
import { Post } from "./posts.model";


@Module({
  providers: [],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([User, Post]),
  ]
})
export class PostsModule {
}
