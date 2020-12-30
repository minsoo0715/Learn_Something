# NestJS
<p style="font-size:13px;">본 문서는 <a href="https://docs.nestjs.com">공식 문서</a>를 바탕으로 작성됨.</p> 


## Start 

#### install Nest-cli
```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

<table>
  <thead>
    <tr>
      <th>nestJS</th>
      <th>ExpressJS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="item">app.controller.ts</td>
      <td>MVC에서의 컨트롤러</td>
    </tr>
    <tr>
      <td><span class="item">app.controller.spec.ts</span></td>
      <td>컨트롤러 Unit test 코드</td>
    </tr>
    <tr>
      <td><span class="item">app.module.ts</td>
      <td>앱 최상단 모듈</td>
    </tr>
    <tr>
      <td><span class="item">app.service.ts</td>
      <td>MVC에서의 서비스</td>
    </tr>
    <tr>
      <td><span class="item">main.ts</td>
      <td>앱의 진입점</td>
    </tr>
  </tbody>
</table>


#### app.module.ts
```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { AdminController, TestController } from './test.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, TestController, AdminController], //Some controllers
  providers: [AppService], //Some Providers
})
export class AppModule {}

```

#### main.ts
```typescript
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
}
bootstrap();

```

## Controller

### 구조
```typescript
@Controller('some') //  routing '/some'
export class Controller {
  @Get() // @Get @Post @Delete @Put 
  someFunction() {
    return `request to '/some' with Get Method`;
  }

  @Post()
  someFunction() {
    return `request to '/some' with Post Method`;
  }

  @Get('a')
  someFunction() {
    return `request to '/some/a with Get Method'`
  }
}
```
Spring 구조랑 유사


### HttpCode
<p>Standard 방식 <strong style="color: red;">recommended</strong></p>
``` typescript
  @Get()
  @HttpCode(200) //Here
  findAll(): string{
    return 'This action returns all data'
  }
```
<p>Library-specific 방식 (expressjs)</p>
``` typescript
  @Get()
  findAll(@Res() response: Response, @Req() request: Request): string{
    response.status(200).send(`request data ${request.body}`);
    return;
  }
```
<table>
  <thead>
    <tr>
      <th>nestJS</th>
      <th>ExpressJS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@Request(), @Req()</td>
      <td>req</td>
    </tr>
    <tr>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">@Response(), @Res()*</span></td>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">res</td>
    </tr>
    <tr>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">@Next()</td>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">next</td>
    </tr><tr>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">@Session()</td>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">req.session</td>
    </tr><tr>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">@Param(key?: string)</td>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">req.params / req.params[key]</td>
    </tr><tr>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">@Body(key?: string)</td>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">req.body / req.body[key]</td>
    </tr>
    <tr>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">@Query(key?: string)</td>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">req.query / req.query[key]</td>
    </tr>
    <tr>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">@Headers(name?: string)</td>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">req.headers / req.headers[name]</td>
    </tr>
    <tr>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">@Ip()</td>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">req.ip</td>
    </tr>
    <tr>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">@HostParam()</td>
      <td><span style="padding: 2px 6px; background-color: #f0f2f3;color: #2876d2;">req.hosts</td>
    </tr>
  </tbody>
</table>

### Header
``` typescript
  @Post
  @Header('Cache-Control', none) //Cache-Control <- none
  someFunction() {
    return 'set cache-control';
  }
```

### Redirect
``` typescript
  @Get()
  @Redirect('https://www.github.com', 302) //함수가 끝나면 redirect
  //301은 영구적, 302는 일시적

  @Get('repository')
  @Redirect('https://www.github.com', 302)
  RepositoryFunction(@Query('id') id:string) {
    if(id === "minsoo0715") {
      return {url: 'https://www.github.com/minsoo0715"}; //함수 안에서 redirect target을 바꿈
    }
  } 
```

### Param
``` typescript
  @Get(':id')
  someFunction(@Param('id') id: string):string {
    return `id Param is ${id}`
  }
```

### async
``` typescript
  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }
  ```

  ### Dto

  ```typescript
  export class CreateUserDto() {
    name: string;
    age: string;
    id: string;

    //....getter or setter.. etc..
  }
```
```typescript
  @Post create(@Body() createUserDto: CreateUserDto) {
    return 'this acction adds new user';
  }
```
### 현재 코드
```typescript
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
```  


