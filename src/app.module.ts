import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryItemsModule } from './inventory-items/inventory-items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryItem } from './inventory-items/entities/inventory-item.entity';
import { CustomerMasterModule } from './customer-master/customer-master.module';
import { CustomerMaster } from './customer-master/entities/customer-master.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestdb',
      entities: [InventoryItem, CustomerMaster],
    }),
    InventoryItemsModule,
    CustomerMasterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
