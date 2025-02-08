import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArticleContentCountOrderByAggregateInput {

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
}
