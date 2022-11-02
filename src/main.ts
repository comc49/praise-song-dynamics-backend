import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import { DataSource, getRepository } from 'typeorm';
import { TypeORMSession } from './typeorm/entities/session.entity';
import * as session from 'express-session';
import { TypeormStore } from 'connect-typeorm/out';
import { ValidationPipe } from '@nestjs/common';


const PORT = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://studio.apollographql.com'
    ],
    credentials: false,
  });
  app.setGlobalPrefix('api');
  app.use(
    session({
      cookie: {
        maxAge: 10000,
      },
      secret: process.env.COOKIE_SECRET || 'sup bro',
      resave: false,
      saveUninitialized: false,
      name: 'gp-tech-checklist',
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);
}
bootstrap();
