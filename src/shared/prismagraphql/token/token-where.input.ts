import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumTokensTypeFilter } from '../prisma/enum-tokens-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TokenWhereInput {

    @Field(() => [TokenWhereInput], {nullable:true})
    AND?: Array<TokenWhereInput>;

    @Field(() => [TokenWhereInput], {nullable:true})
    OR?: Array<TokenWhereInput>;

    @Field(() => [TokenWhereInput], {nullable:true})
    NOT?: Array<TokenWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => EnumTokensTypeFilter, {nullable:true})
    type?: EnumTokensTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
