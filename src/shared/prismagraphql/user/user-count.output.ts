import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    questions?: number;

    @Field(() => Int, {nullable:false})
    reviews?: number;

    @Field(() => Int, {nullable:false})
    articles?: number;

    @Field(() => Int, {nullable:false})
    comments?: number;

    @Field(() => Int, {nullable:false})
    favoriteProducts?: number;
}
