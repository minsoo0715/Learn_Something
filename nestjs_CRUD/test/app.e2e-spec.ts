import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UserModule } from './../src/user.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UserModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/User (POST)', () => {
    return request(app.getHttpServer())
      .post('/User')
      .send({
        name: 'hong',
        id: 'hong1787',
        pwd: 'abcde',
      })
      .expect(201)
      .expect('changed');
  });

  it('/User (Get)', async () => {
    request(app.getHttpServer()).post('/User').send({
      name: 'hong',
      id: 'hong1787',
      pwd: 'abcde',
    });
    return request(app.getHttpServer()).get('/User').expect(200).expect([]);
  });
});

//e2e 테스트에선 mocking data가 허용X
