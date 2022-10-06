import { Controller, Get, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('test')
export class TestController {
  @Get('ab*cd') // it will match with abcd ab_cd abecd else.
  findWild(): string {
    return 'this route use a wildcard';
  }

  @Get('redirect')
  @Redirect('https://www.github.com', 301)
  redirect(): string {
    return 'test';
  }

  @Get('redirectjson')
  @Redirect('https://www.google.com', 302)
  redirectjson(@Query('tg') tg: string) {
    if (tg === `naver`) {
      return { url: `https://www.naver.com`, statusCode: 404 };
    }
  }

  @Get()
  getHost(@Req() request: Request): string {
    console.log('여기로 오니?');
    return request.headers.host;
  }
}

@Controller({ host: 'test.localhost:3000' }) // i dont know that
export class AdminController {
  @Get('tst')
  index(): string {
    return 'Admin Page';
  }
}
