import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryItem } from './entities/inventory-item.entity';

@Injectable()
export class InventoryItemsService {
  constructor(
    @InjectRepository(InventoryItem)
    private readonly inventoryRepository: Repository<InventoryItem>,
  ) {}

  findAll(): Promise<InventoryItem[]> {
    return this.inventoryRepository.find();
  }

  findOne(id: number): Promise<InventoryItem | null> {
    return this.inventoryRepository.findOne({ where: { id } });
  }

  create(item: Partial<InventoryItem>): Promise<InventoryItem> {
    const newItem = this.inventoryRepository.create(item);
    return this.inventoryRepository.save(newItem);
  }

  async remove(id: number): Promise<void> {
    await this.inventoryRepository.delete(id);
  }
}
