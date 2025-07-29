import { Test, TestingModule } from '@nestjs/testing';
import { OrderOfProductService } from './order-of-product.service';

describe('OrderOfProductService', () => {
  let service: OrderOfProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderOfProductService],
    }).compile();

    service = module.get<OrderOfProductService>(OrderOfProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
