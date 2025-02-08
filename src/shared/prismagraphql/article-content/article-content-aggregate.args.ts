import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleContentWhereInput } from './article-content-where.input';
import { Type } from 'class-transformer';
import { ArticleContentOrderByWithRelationInput } from './article-content-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ArticleContentWhereUniqueInput } from './article-content-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleContentCountAggregateInput } from './article-content-count-aggregate.input';
import { ArticleContentMinAggregateInput } from './article-content-min-aggregate.input';
import { ArticleContentMaxAggregateInput } from './article-content-max-aggregate.input';

@ArgsType()
export class ArticleContentAggregateArgs {

    @Field(() => ArticleContentWhereInput, {nullable:true})
    @Type(() => ArticleContentWhereInput)
    where?: ArticleContentWhereInput;

    @Field(() => [ArticleContentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ArticleContentOrderByWithRelationInput>;

    @Field(() => ArticleContentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ArticleContentCountAggregateInput, {nullable:true})
    _count?: ArticleContentCountAggregateInput;

    @Field(() => ArticleContentMinAggregateInput, {nullable:true})
    _min?: ArticleContentMinAggregateInput;

    @Field(() => ArticleContentMaxAggregateInput, {nullable:true})
    _max?: ArticleContentMaxAggregateInput;
}
