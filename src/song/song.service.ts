import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSongInput } from './dto/create-song.input';
import { UpdateSongInput } from './dto/update-song.input';
import { Song } from './entities/song.entity';

@Injectable()
export class SongService {
  constructor(@InjectRepository(Song) private songRepository: Repository<Song>) {
  }
  create(createSongInput: CreateSongInput) {
    const newChecklist = this.songRepository.create(createSongInput);
    return this.songRepository.save(newChecklist);
  }

  findAll() {
    return `This action returns all song`;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongInput: UpdateSongInput) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
