import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from 'src/song/entities/song.entity';
import { Repository, In } from 'typeorm';
import DataLoader from 'dataloader';

// @Injectable({ scope: Scope.REQUEST }) // 👈 Request scoped
// export class InstrumentsBySongLoader extends DataLoader<number, Instruments[]> {
//   constructor(
//     @InjectRepository(Song)
//     private readonly songsRepository: Repository<Song>,
//   ) {
//     super(keys => this.batchLoadFn(keys));
//   }
  
//   private async batchLoadFn(songIds: readonly number[]): Promise<Instruments[][]> {
//     const songsWithFlavors = await this.songsRepository.find({
//       select: ['id'], // since we don't really need a song object here
//       relations: ['instruments'], // to fetch related instruments
//       where: {
//         id: In(songIds as number[]), // to make sure we only query requested songs
//       },
//     });

//     // to map an array of songs two a 2-dimensional array of flavors where position in the array indicates to which song flavors belong
//     return songsWithFlavors.map(song => song.instruments);
//   }
// }
