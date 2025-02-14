import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumTokensTypeWithAggregatesFilter } from '../prisma/enum-tokens-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TokenScalarWhereWithAggregatesInput {

    @Field(() => [TokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TokenScalarWhereWithAggregatesInput>;

    @Field(() => [TokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TokenScalarWhereWithAggregatesInput>;

    @Field(() => [TokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TokenScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => EnumTokensTypeWithAggregatesFilter, {nullable:true})
    type?: EnumTokensTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
