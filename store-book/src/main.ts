import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

const start = async () => {
  try {
    const config = new DocumentBuilder()
    .setTitle('BookStore')
    .setDescription('My first full-stack project')
    .setVersion('1.0.0')
    .addTag('NodeJS, NestJS, JWT, Sequilize, Swagger, Postgres')
    .build();

    const PORT = process.env.PORT || 7000
    const app = await NestFactory.create(AppModule);
    const document = await SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document)

    // app.use(express.json());
    app.enableCors();
    // app.use(express.urlencoded({extended:true}))
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
      
    })
  } catch (error) {
    console.log(error);
  }
}

start()
