import { Test, TestingModule } from '@nestjs/testing';
import { CandidatoVagaService } from './candidato-vaga.service';

describe('CandidatoVagaService', () => {
  let service: CandidatoVagaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CandidatoVagaService],
    }).compile();

    service = module.get<CandidatoVagaService>(CandidatoVagaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
