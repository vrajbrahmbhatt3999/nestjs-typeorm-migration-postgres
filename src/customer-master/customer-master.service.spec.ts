import { Test, TestingModule } from '@nestjs/testing';
import { CustomerMasterService } from './customer-master.service';

describe('CustomerMasterService', () => {
  let service: CustomerMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerMasterService],
    }).compile();

    service = module.get<CustomerMasterService>(CustomerMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
