import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSongInput } from './dto/create-song.input';
import { UpdateSongInput } from './dto/update-song.input';
import { UserInputError } from 'apollo-server-express';
import { Song } from './entities/song.entity';
import { PubSubModule } from 'src/pub-sub/pub-sub.module';
import { PubSub } from 'graphql-subscriptions';


@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
    private readonly pubSub: PubSub, 
    ) {
  }
  async create(createSongInput: CreateSongInput) {
    const newSong = await this.songRepository.create(createSongInput);
    const newSongEntity = this.songRepository.save(newSong);
    this.pubSub.publish('songAdded', { songAdded: newSong}); // 👈 PubSub
    return newSongEntity;
  }

  async findAll() {
    return await this.songRepository.find();
  }

  async findOne(id: number) {
    const song = await this.songRepository.findOne({where: {id}});
    if (!song) {
      throw new UserInputError(`Song with ID ${id} does not exist`);
    }
    return song;
  }

  async update(id: number, updateSongInput: UpdateSongInput) {
    const song = await this.songRepository.preload({
      id,
      ...updateSongInput
    });
    if (!song) {
      throw new UserInputError(`Song with ID ${id} does not exist`);
    }
    return this.songRepository.save(song);
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
