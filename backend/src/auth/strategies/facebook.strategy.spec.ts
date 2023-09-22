import { Test, TestingModule } from '@nestjs/testing';
import { GoogleStrategy } from './google.strategy';
import { ConfigModule } from '@nestjs/config';
import { FacebookStrategy } from './facebook.strategy';

describe('FacebookStrategy', () => {
  let service: FacebookStrategy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({})],
      providers: [FacebookStrategy],
    }).compile();

    service = module.get<FacebookStrategy>(FacebookStrategy);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validate', () => {
    it('should format data and move to next middleware', async () => {
      await service.validate(
        'some-token',
        '',
        {
          name: { givenName: 'uday', familyName: 'kushwah' },
          emails: [{ value: 'udayk@yopmail.com' }],
          provider: 'Facebook',
          id: 'some-id',
          displayName: 'udayk',
        },
        jest.fn,
      );
    });
  });
});
