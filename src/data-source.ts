import { DataSource } from 'typeorm';
import { InventoryItem } from './inventory-items/entities/inventory-item.entity';
import { CustomerMaster } from './customer-master/entities/customer-master.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nestdb',
  entities: [InventoryItem, CustomerMaster],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});

export default AppDataSource;
