import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CategoryCountOrderByAggregateInput } from './category-count-order-by-aggregate.input';
import { CategoryMaxOrderByAggregateInput } from './category-max-order-by-aggregate.input';
import { CategoryMinOrderByAggregateInput } from './category-min-order-by-aggregate.input';

@InputType()
export class CategoryOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    banner?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CategoryCountOrderByAggregateInput, {nullable:true})
    _count?: CategoryCountOrderByAggregateInput;

    @Field(() => CategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: CategoryMaxOrderByAggregateInput;

    @Field(() => CategoryMinOrderByAggregateInput, {nullable:true})
    _min?: CategoryMinOrderByAggregateInput;
}
