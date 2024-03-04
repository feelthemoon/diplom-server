import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from 'APP/app.module';

async function bootstrap() {
  const APP_PORT = process.env.APP_PORT || 8000;

  const app = await NestFactory.create(AppModule);

  await app.listen(APP_PORT, () => Logger.verbose(`APP HAS BEEN STARTED AT PORT ${APP_PORT}`));
}
bootstrap();
