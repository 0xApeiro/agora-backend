import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Collection {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
