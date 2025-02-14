import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereInput } from './token-where.input';
import { EnumTokensTypeFilter } from '../prisma/enum-tokens-type-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TokenWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => [TokenWhereInput], {nullable:true})
    AND?: Array<TokenWhereInput>;

    @Field(() => [TokenWhereInput], {nullable:true})
    OR?: Array<TokenWhereInput>;

    @Field(() => [TokenWhereInput], {nullable:true})
    NOT?: Array<TokenWhereInput>;

    @Field(() => EnumTokensTypeFilter, {nullable:true})
    type?: EnumTokensTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
