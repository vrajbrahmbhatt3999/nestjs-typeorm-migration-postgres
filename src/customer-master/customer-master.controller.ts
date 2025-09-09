import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CustomerMasterService } from './customer-master.service';
import { CreateCustomerMasterDto } from './dto/create-customer-master.dto';

@Controller('customer-master')
export class CustomerMasterController {
  constructor(private readonly customerMasterService: CustomerMasterService) {}

  @Post()
  create(@Body() createCustomerMasterDto: CreateCustomerMasterDto) {
    return this.customerMasterService.create(createCustomerMasterDto);
  }

  @Get()
  findAll() {
    return this.customerMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerMasterService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCustomerMasterDto: UpdateCustomerMasterDto) {
  //   return this.customerMasterService.update(+id, updateCustomerMasterDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerMasterService.remove(+id);
  }
}
