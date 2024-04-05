import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'hello cuoc doi';
  }
}
