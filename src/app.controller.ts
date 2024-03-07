import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';

@Controller()
export class AppController {

  private _controllerContext = 'AppController';

  constructor(
    private readonly appService: AppService,
    private readonly logger: LoggerService
  ) {}

  @Get()
  getHello(): IHelloWorld {
    const logContext = `${this._controllerContext}.getHello`

    this.logger.log('This is an INFO log message.', logContext);

    this.logger.warn('This is an WARN log message.', logContext);

    this.logger.debug('This is an DEBUG log message.', logContext);

    return this.appService.getHello();
  }

  @Get('/health')
  getHealth(): IHealth {
    const logContext = `${this._controllerContext}.getHealth`

    this.logger.log('This is an INFO log message.', logContext);

    this.logger.warn('This is an WARN log message.', logContext);

    this.logger.debug('This is an DEBUG log message.', logContext);

    return this.appService.getHealth();
  }
  
  @Get('/trigger-exception')
  getTriggerException(): IHelloWorld {

    const logContext = `${this._controllerContext}.getTriggerException`

    this.logger.log('This is an INFO log message.', logContext);

    this.logger.warn('This is an WARN log message.', logContext);

    this.logger.debug('This is an DEBUG log message.', logContext);

    throw new HttpException("An http exception was triggered", HttpStatus.INTERNAL_SERVER_ERROR)
  }
}
