import { Test, TestingModule } from '@nestjs/testing';
import { ListingService } from './listings.service';

describe('ListingService', () => {
  let service: ListingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListingService],
    }).compile();

    service = module.get<ListingService>(ListingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
