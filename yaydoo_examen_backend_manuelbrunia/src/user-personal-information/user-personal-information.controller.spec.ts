import { Test, TestingModule } from '@nestjs/testing';
import { UserPersonalInformationController } from './user-personal-information.controller';

describe('UserPersonalInformationController', () => {
  let controller: UserPersonalInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPersonalInformationController],
    }).compile();

    controller = module.get<UserPersonalInformationController>(UserPersonalInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
