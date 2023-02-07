import { Injectable } from "@nestjs/common";


@Injectable()
export class AppService {

    getUsers() {
      return [{id: 1, name: 'Mark', age: '22'}]
    }
}
