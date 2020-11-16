import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // We need to replicate same environment on Testing as the environment we have main.ts
    // If we don't do this, transform doesn't work on Testing
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true, // This is awesome!
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });

    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({ title: 'Test', year: 2020, genres: ['test'] })
        .expect(201);
    });

    it('POST 400 should send correct types of Movie', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({ title: 'Test', year: 2020, genres: ['test'], other: 'thing' })
        .expect(400);
    });

    it('POST 400 should send all required types', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({ title: 'Test', genres: ['test'] })
        .expect(400);
    });

    it('DELETE 404 Not Found', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });
  });

  describe('/movies/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer()).get('/movies/1').expect(200);
    });

    it('GET 404', () => {
      return request(app.getHttpServer()).get('/movies/9999').expect(404);
    });

    it('PATCH 200', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({ title: 'Updated Test' })
        .expect(200);
    });

    it('PATCH 404', () => {
      return request(app.getHttpServer())
        .patch('/movies/999')
        .send({ title: 'Updated Test' })
        .expect(404);
    });

    it('DELETE 200', () => {
      return request(app.getHttpServer()).delete('/movies/1').expect(200);
    });
  });
});
