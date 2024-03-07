import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHealth(): IHealth {
    return {
      version: "1.0",
      datetime: new Date().toISOString(),
    };
  }

  getHello(): IHelloWorld {
    return {
      hello: "world"
    };
  }
  
}
