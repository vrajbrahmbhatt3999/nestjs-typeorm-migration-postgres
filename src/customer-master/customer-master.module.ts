import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerMasterController } from './customer-master.controller';
import { CustomerMasterService } from './customer-master.service';
import { CustomerMaster } from './entities/customer-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerMaster])],
  controllers: [CustomerMasterController],
  providers: [CustomerMasterService],
})
export class CustomerMasterModule {}
