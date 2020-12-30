import { Request, Response } from 'express';
import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Get()
  //@HttpCode(200) nestjs
  async findAll(/*@Req() request: Request, @Res() response: Response*/): Promise<
    any[]
  > {
    return [];

    //response.status(404).end(); expressjs
    //return `request body : ${request.body}`;
    //return 'This action returns all cats';
  }

  //   async findAll(): Observable<
  //     any[]
  //   > {
  //     return of([]);

  //   }

  @Post()
  //@Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    createCatDto.age = 3;
    createCatDto.breed = 'breed';
    createCatDto.name = 'name';
    return 'this action adds a new cat';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
