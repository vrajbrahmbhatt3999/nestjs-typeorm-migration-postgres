import { Test, TestingModule } from '@nestjs/testing';
import { CustomerMasterController } from './customer-master.controller';
import { CustomerMasterService } from './customer-master.service';

describe('CustomerMasterController', () => {
  let controller: CustomerMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerMasterController],
      providers: [CustomerMasterService],
    }).compile();

    controller = module.get<CustomerMasterController>(CustomerMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
