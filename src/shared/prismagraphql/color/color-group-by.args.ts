import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColorWhereInput } from './color-where.input';
import { Type } from 'class-transformer';
import { ColorOrderByWithAggregationInput } from './color-order-by-with-aggregation.input';
import { ColorScalarFieldEnum } from './color-scalar-field.enum';
import { ColorScalarWhereWithAggregatesInput } from './color-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ColorCountAggregateInput } from './color-count-aggregate.input';
import { ColorMinAggregateInput } from './color-min-aggregate.input';
import { ColorMaxAggregateInput } from './color-max-aggregate.input';

@ArgsType()
export class ColorGroupByArgs {

    @Field(() => ColorWhereInput, {nullable:true})
    @Type(() => ColorWhereInput)
    where?: ColorWhereInput;

    @Field(() => [ColorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ColorOrderByWithAggregationInput>;

    @Field(() => [ColorScalarFieldEnum], {nullable:false})
    by!: Array<`${ColorScalarFieldEnum}`>;

    @Field(() => ColorScalarWhereWithAggregatesInput, {nullable:true})
    having?: ColorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ColorCountAggregateInput, {nullable:true})
    _count?: ColorCountAggregateInput;

    @Field(() => ColorMinAggregateInput, {nullable:true})
    _min?: ColorMinAggregateInput;

    @Field(() => ColorMaxAggregateInput, {nullable:true})
    _max?: ColorMaxAggregateInput;
}
