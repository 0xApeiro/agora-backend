import { Test, TestingModule } from '@nestjs/testing';
import { UniqueItemService } from './unique-item.service';

describe('UniqueItemService', () => {
  let service: UniqueItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniqueItemService],
    }).compile();

    service = module.get<UniqueItemService>(UniqueItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
