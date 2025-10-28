import { PrismaClient } from '@prisma/client';
import { Logger } from 'winston';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    super({
      log: [
        { emit: 'event', level: 'info' },
        { emit: 'event', level: 'warn' },
        { emit: 'event', level: 'error' },
        { emit: 'event', level: 'query' },
      ],
    } as any); // Type assertion biar ga ribet
  }

  async onModuleInit() {
    await this.$connect();

    (this.$on as any)('info', (e: any) => this.logger.info(e));
    (this.$on as any)('warn', (e: any) => this.logger.warn(e));
    (this.$on as any)('error', (e: any) => this.logger.error(e));
    (this.$on as any)('query', (e: any) => this.logger.info(e));
  }
}
