// import { Injectable } from '@nestjs/common';
// import { CreateCustomerMasterDto } from './dto/create-customer-master.dto';
// import { UpdateCustomerMasterDto } from './dto/update-customer-master.dto';

// @Injectable()
// export class CustomerMasterService {
//   create(createCustomerMasterDto: CreateCustomerMasterDto) {
//     return 'This action adds a new customerMaster';
//   }

//   findAll() {
//     return `This action returns all customerMaster`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} customerMaster`;
//   }

//   update(id: number, updateCustomerMasterDto: UpdateCustomerMasterDto) {
//     return `This action updates a #${id} customerMaster`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} customerMaster`;
//   }
// }
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerMaster } from './entities/customer-master.entity';

@Injectable()
export class CustomerMasterService {
  constructor(
    @InjectRepository(CustomerMaster)
    private readonly customerRepository: Repository<CustomerMaster>,
  ) {}

  findAll(): Promise<CustomerMaster[]> {
    return this.customerRepository.find();
  }

  findOne(id: number): Promise<CustomerMaster | null> {
    return this.customerRepository.findOne({ where: { id } });
  }

  create(item: Partial<CustomerMaster>): Promise<CustomerMaster> {
    const newItem = this.customerRepository.create(item);
    return this.customerRepository.save(newItem);
  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
