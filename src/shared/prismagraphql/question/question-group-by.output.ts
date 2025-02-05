import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { QuestionCountAggregate } from './question-count-aggregate.output';
import { QuestionMinAggregate } from './question-min-aggregate.output';
import { QuestionMaxAggregate } from './question-max-aggregate.output';

@ObjectType()
export class QuestionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    question!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => QuestionCountAggregate, {nullable:true})
    _count?: QuestionCountAggregate;

    @Field(() => QuestionMinAggregate, {nullable:true})
    _min?: QuestionMinAggregate;

    @Field(() => QuestionMaxAggregate, {nullable:true})
    _max?: QuestionMaxAggregate;
}
