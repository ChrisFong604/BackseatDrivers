/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

/* Middleware packages */
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import { ExtractJwt } from 'passport-jwt';
import { jwtConstants } from './app/modules/auth/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const config = new DocumentBuilder()
    .setTitle('Backseat Drivers API')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: ['http://localhost:4200', 'http://localhost:4200/'],
    allowedHeaders: '*',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  /* Cookie handling for JWT auth */

  app.use(cookieParser());

  const port = process.env.PORT || 3333;

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
