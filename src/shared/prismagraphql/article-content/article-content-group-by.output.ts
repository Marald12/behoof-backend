import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArticleContentTypes } from '../prisma/article-content-types.enum';
import { ArticleContentCountAggregate } from './article-content-count-aggregate.output';
import { ArticleContentMinAggregate } from './article-content-min-aggregate.output';
import { ArticleContentMaxAggregate } from './article-content-max-aggregate.output';

@ObjectType()
export class ArticleContentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [String], {nullable:true})
    images?: Array<string>;

    @Field(() => ArticleContentTypes, {nullable:false})
    types!: `${ArticleContentTypes}`;

    @Field(() => String, {nullable:false})
    articleId!: string;

    @Field(() => ArticleContentCountAggregate, {nullable:true})
    _count?: ArticleContentCountAggregate;

    @Field(() => ArticleContentMinAggregate, {nullable:true})
    _min?: ArticleContentMinAggregate;

    @Field(() => ArticleContentMaxAggregate, {nullable:true})
    _max?: ArticleContentMaxAggregate;
}
