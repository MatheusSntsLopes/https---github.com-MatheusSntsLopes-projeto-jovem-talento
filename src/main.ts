import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Documentação com Swagger - Jovem Talento')
    .setDescription(
      'Projeto criado para a facilitar a interação e a procura entre empresas e empregado',
    )
    .setVersion('1.3')
    .addTag('login')
    .addTag('candidato')
    .addTag('empresario')
    .addTag('curriculo')
    .addTag('vaga')
    .addTag('candidato-vaga')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
