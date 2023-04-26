import { Test, TestingModule } from '@nestjs/testing';
import { EmpresarioController } from './empresario.controller';
import { EmpresarioService } from './empresario.service';

describe('EmpresarioController', () => {
  let controller: EmpresarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpresarioController],
      providers: [EmpresarioService],
    }).compile();

    controller = module.get<EmpresarioController>(EmpresarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
