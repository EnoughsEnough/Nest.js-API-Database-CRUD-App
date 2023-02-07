import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";


@Controller('das')
export class AppController {


  constructor(private appService: AppService) {
  }
  @Get('das')
  getUsers() {
    return this.appService.getUsers()
  }
}
