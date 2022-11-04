import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongResolver } from './song.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Song]),
    PubSubModule
  ],
  providers: [SongResolver, SongService]
})
export class SongModule {}
