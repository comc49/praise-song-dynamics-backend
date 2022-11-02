import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSongInput {
  @Field()
  title: string;

  @Field(() => Number)
  bpm: number;

  @Field(() => [String])
  instruments: string[];

  @Field(() => [String])
  sections: string[];
}
