import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/users.model";
import { Post } from "./posts.model";
import { FilesModule } from "../files/files.module";
import { PostsService } from "./posts.service";


@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([User, Post]),
    FilesModule
  ]
})
export class PostsModule {
}
