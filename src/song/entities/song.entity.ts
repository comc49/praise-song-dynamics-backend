import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Song {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  bpm: number;

  @Column("text", { array: true })
  @Field(() => [String])
  instruments: string[];

  @Column("text", { array: true })
  @Field(() => [String])
  sections: string[];


}
