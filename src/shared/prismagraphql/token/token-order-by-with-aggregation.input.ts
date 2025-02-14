import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TokenCountOrderByAggregateInput } from './token-count-order-by-aggregate.input';
import { TokenMaxOrderByAggregateInput } from './token-max-order-by-aggregate.input';
import { TokenMinOrderByAggregateInput } from './token-min-order-by-aggregate.input';

@InputType()
export class TokenOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => TokenCountOrderByAggregateInput, {nullable:true})
    _count?: TokenCountOrderByAggregateInput;

    @Field(() => TokenMaxOrderByAggregateInput, {nullable:true})
    _max?: TokenMaxOrderByAggregateInput;

    @Field(() => TokenMinOrderByAggregateInput, {nullable:true})
    _min?: TokenMinOrderByAggregateInput;
}
