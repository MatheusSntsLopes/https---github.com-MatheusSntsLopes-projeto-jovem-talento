import { Test, TestingModule } from '@nestjs/testing';
import { EmpresarioService } from './empresario.service';

describe('EmpresarioService', () => {
  let service: EmpresarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresarioService],
    }).compile();

    service = module.get<EmpresarioService>(EmpresarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
