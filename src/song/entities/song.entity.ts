import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Song {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
