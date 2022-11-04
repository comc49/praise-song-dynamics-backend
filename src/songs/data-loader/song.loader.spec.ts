import { Test, TestingModule } from '@nestjs/testing';
import { SongLoader } from './song.loader';

describe('SongLoader', () => {
  let provider: SongLoader;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongLoader],
    }).compile();

    provider = module.get<SongLoader>(SongLoader);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
