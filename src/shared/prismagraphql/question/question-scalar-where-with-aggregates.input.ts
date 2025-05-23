import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class QuestionScalarWhereWithAggregatesInput {

    @Field(() => [QuestionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<QuestionScalarWhereWithAggregatesInput>;

    @Field(() => [QuestionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<QuestionScalarWhereWithAggregatesInput>;

    @Field(() => [QuestionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<QuestionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    question?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
