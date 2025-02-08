import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArticleContentCountAggregate } from './article-content-count-aggregate.output';
import { ArticleContentMinAggregate } from './article-content-min-aggregate.output';
import { ArticleContentMaxAggregate } from './article-content-max-aggregate.output';

@ObjectType()
export class AggregateArticleContent {

    @Field(() => ArticleContentCountAggregate, {nullable:true})
    _count?: ArticleContentCountAggregate;

    @Field(() => ArticleContentMinAggregate, {nullable:true})
    _min?: ArticleContentMinAggregate;

    @Field(() => ArticleContentMaxAggregate, {nullable:true})
    _max?: ArticleContentMaxAggregate;
}
