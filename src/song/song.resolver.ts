import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { SongService } from './song.service';
import { Song } from './entities/song.entity';
import { CreateSongInput } from './dto/create-song.input';
import { UpdateSongInput } from './dto/update-song.input';
import { PubSub } from 'graphql-subscriptions';


@Resolver(() => Song)
export class SongResolver {
  constructor(
    private readonly songService: SongService,
    private readonly pubSub: PubSub
  ) {}

  @Mutation(() => Song)
  async createSong(@Args('createSongInput') createSongInput: CreateSongInput) {
    return this.songService.create(createSongInput);
  }

  @Query(() => [Song], { name: 'songs' })
  async findAll() {
    return this.songService.findAll();
  }

  @Query(() => Song, { name: 'song' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.songService.findOne(id);
  }

  @Mutation(() => Song)
  async updateSong(@Args('updateSongInput') updateSongInput: UpdateSongInput) {
    return this.songService.update(updateSongInput.id, updateSongInput);
  }

  @Mutation(() => Song)
  async removeSong(@Args('id', { type: () => Int }) id: number) {
    return this.songService.remove(id);
  }

  @Subscription(() => Song)
  async songAdded() {
    return this.pubSub.asyncIterator('songAdded');
  }

}
