import { Test, TestingModule } from '@nestjs/testing';
import { UniqueItemResolver } from './unique-item.resolver';
import { UniqueItemService } from './unique-item.service';

describe('UniqueItemResolver', () => {
  let resolver: UniqueItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniqueItemResolver, UniqueItemService],
    }).compile();

    resolver = module.get<UniqueItemResolver>(UniqueItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
