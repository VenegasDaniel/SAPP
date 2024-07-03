import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContributionsService } from './contributions.service';
import { CreateContributionDto } from './dto/create-contribution.dto';

@Controller('contributions')
export class ContributionsController {
  constructor(private readonly ordersService: ContributionsService) {}

  @Post()
  async create(@Body() createOrderDto: CreateContributionDto) {
    console.log('createOrderDto:', createOrderDto);
    return await this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

}
