import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleContentWhereInput } from './article-content-where.input';
import { Type } from 'class-transformer';
import { ArticleContentOrderByWithAggregationInput } from './article-content-order-by-with-aggregation.input';
import { ArticleContentScalarFieldEnum } from './article-content-scalar-field.enum';
import { ArticleContentScalarWhereWithAggregatesInput } from './article-content-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ArticleContentCountAggregateInput } from './article-content-count-aggregate.input';
import { ArticleContentMinAggregateInput } from './article-content-min-aggregate.input';
import { ArticleContentMaxAggregateInput } from './article-content-max-aggregate.input';

@ArgsType()
export class ArticleContentGroupByArgs {

    @Field(() => ArticleContentWhereInput, {nullable:true})
    @Type(() => ArticleContentWhereInput)
    where?: ArticleContentWhereInput;

    @Field(() => [ArticleContentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ArticleContentOrderByWithAggregationInput>;

    @Field(() => [ArticleContentScalarFieldEnum], {nullable:false})
    by!: Array<`${ArticleContentScalarFieldEnum}`>;

    @Field(() => ArticleContentScalarWhereWithAggregatesInput, {nullable:true})
    having?: ArticleContentScalarWhereWithAggregatesInput;

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
