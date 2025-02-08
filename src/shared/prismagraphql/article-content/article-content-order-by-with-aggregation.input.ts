import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleContentCountOrderByAggregateInput } from './article-content-count-order-by-aggregate.input';
import { ArticleContentMaxOrderByAggregateInput } from './article-content-max-order-by-aggregate.input';
import { ArticleContentMinOrderByAggregateInput } from './article-content-min-order-by-aggregate.input';

@InputType()
export class ArticleContentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    types?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    articleId?: `${SortOrder}`;

    @Field(() => ArticleContentCountOrderByAggregateInput, {nullable:true})
    _count?: ArticleContentCountOrderByAggregateInput;

    @Field(() => ArticleContentMaxOrderByAggregateInput, {nullable:true})
    _max?: ArticleContentMaxOrderByAggregateInput;

    @Field(() => ArticleContentMinOrderByAggregateInput, {nullable:true})
    _min?: ArticleContentMinOrderByAggregateInput;
}
