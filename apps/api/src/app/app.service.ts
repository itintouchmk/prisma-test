import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../prisma';
@Injectable()
export class AppService implements OnModuleInit,OnModuleDestroy {
  client: PrismaClient;
  constructor() {
    this.client = new PrismaClient();
  }
  onModuleDestroy() {
    this.client.$connect();
  }
  onModuleInit() {
    this.client.$disconnect();
  }
}
