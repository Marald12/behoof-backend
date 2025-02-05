import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';
import { Type } from 'class-transformer';
import { BrandOrderByWithAggregationInput } from './brand-order-by-with-aggregation.input';
import { BrandScalarFieldEnum } from './brand-scalar-field.enum';
import { BrandScalarWhereWithAggregatesInput } from './brand-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BrandCountAggregateInput } from './brand-count-aggregate.input';
import { BrandMinAggregateInput } from './brand-min-aggregate.input';
import { BrandMaxAggregateInput } from './brand-max-aggregate.input';

@ArgsType()
export class BrandGroupByArgs {

    @Field(() => BrandWhereInput, {nullable:true})
    @Type(() => BrandWhereInput)
    where?: BrandWhereInput;

    @Field(() => [BrandOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BrandOrderByWithAggregationInput>;

    @Field(() => [BrandScalarFieldEnum], {nullable:false})
    by!: Array<`${BrandScalarFieldEnum}`>;

    @Field(() => BrandScalarWhereWithAggregatesInput, {nullable:true})
    having?: BrandScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BrandCountAggregateInput, {nullable:true})
    _count?: BrandCountAggregateInput;

    @Field(() => BrandMinAggregateInput, {nullable:true})
    _min?: BrandMinAggregateInput;

    @Field(() => BrandMaxAggregateInput, {nullable:true})
    _max?: BrandMaxAggregateInput;
}
