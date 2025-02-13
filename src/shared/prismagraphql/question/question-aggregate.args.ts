import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { QuestionWhereInput } from './question-where.input';
import { Type } from 'class-transformer';
import { QuestionOrderByWithRelationInput } from './question-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Int } from '@nestjs/graphql';
import { QuestionCountAggregateInput } from './question-count-aggregate.input';
import { QuestionMinAggregateInput } from './question-min-aggregate.input';
import { QuestionMaxAggregateInput } from './question-max-aggregate.input';

@ArgsType()
export class QuestionAggregateArgs {

    @Field(() => QuestionWhereInput, {nullable:true})
    @Type(() => QuestionWhereInput)
    where?: QuestionWhereInput;

    @Field(() => [QuestionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<QuestionOrderByWithRelationInput>;

    @Field(() => QuestionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => QuestionCountAggregateInput, {nullable:true})
    _count?: QuestionCountAggregateInput;

    @Field(() => QuestionMinAggregateInput, {nullable:true})
    _min?: QuestionMinAggregateInput;

    @Field(() => QuestionMaxAggregateInput, {nullable:true})
    _max?: QuestionMaxAggregateInput;
}
