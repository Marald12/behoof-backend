import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ArticleContentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    images!: number;

    @Field(() => Int, {nullable:false})
    types!: number;

    @Field(() => Int, {nullable:false})
    articleId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
