import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({
  providers: [LoggerService], // Ensure LoggerService is provided
  exports: [LoggerService],
})
export class LoggerModule {}