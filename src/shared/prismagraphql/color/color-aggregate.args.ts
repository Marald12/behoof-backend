import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColorWhereInput } from './color-where.input';
import { Type } from 'class-transformer';
import { ColorOrderByWithRelationInput } from './color-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ColorCountAggregateInput } from './color-count-aggregate.input';
import { ColorMinAggregateInput } from './color-min-aggregate.input';
import { ColorMaxAggregateInput } from './color-max-aggregate.input';

@ArgsType()
export class ColorAggregateArgs {

    @Field(() => ColorWhereInput, {nullable:true})
    @Type(() => ColorWhereInput)
    where?: ColorWhereInput;

    @Field(() => [ColorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ColorOrderByWithRelationInput>;

    @Field(() => ColorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;

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
