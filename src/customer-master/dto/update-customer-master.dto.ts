import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerMasterDto } from './create-customer-master.dto';

export class UpdateCustomerMasterDto extends PartialType(CreateCustomerMasterDto) {}
