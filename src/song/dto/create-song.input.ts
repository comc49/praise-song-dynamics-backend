import { InputType, Int, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CreateSongInput {
  @MinLength(2)
  @Field()
  title: string;

  @Field(() => Number)
  bpm: number;

  @Field(() => [String])
  instruments: string[];

  @Field(() => [String])
  sections: string[];
}
