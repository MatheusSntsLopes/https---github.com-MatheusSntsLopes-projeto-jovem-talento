import { Test, TestingModule } from '@nestjs/testing';
import { CandidatoVagaController } from './candidato-vaga.controller';
import { CandidatoVagaService } from './candidato-vaga.service';

describe('CandidatoVagaController', () => {
  let controller: CandidatoVagaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidatoVagaController],
      providers: [CandidatoVagaService],
    }).compile();

    controller = module.get<CandidatoVagaController>(CandidatoVagaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
