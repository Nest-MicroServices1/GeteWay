import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from './config';
import { RpcCustomExceptionFilter } from './common';

async function bootstrap() {
  const logger = new Logger('Main-Geteway');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  //valida los decoradores de DTO para que estos sean respetados
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new RpcCustomExceptionFilter());

  await app.listen(envs.port);

  console.log('Hola mundo segundo cambio!!');
  

  logger.log(`Geteway running on port ${envs.port}`);
}
bootstrap();
