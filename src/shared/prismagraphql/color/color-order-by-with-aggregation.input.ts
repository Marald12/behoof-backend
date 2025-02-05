import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ColorCountOrderByAggregateInput } from './color-count-order-by-aggregate.input';
import { ColorMaxOrderByAggregateInput } from './color-max-order-by-aggregate.input';
import { ColorMinOrderByAggregateInput } from './color-min-order-by-aggregate.input';

@InputType()
export class ColorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    color?: `${SortOrder}`;

    @Field(() => ColorCountOrderByAggregateInput, {nullable:true})
    _count?: ColorCountOrderByAggregateInput;

    @Field(() => ColorMaxOrderByAggregateInput, {nullable:true})
    _max?: ColorMaxOrderByAggregateInput;

    @Field(() => ColorMinOrderByAggregateInput, {nullable:true})
    _min?: ColorMinOrderByAggregateInput;
}
