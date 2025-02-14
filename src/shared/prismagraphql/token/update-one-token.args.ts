import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenUpdateInput } from './token-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TokenWhereUniqueInput } from './token-where-unique.input';

@ArgsType()
export class UpdateOneTokenArgs {

    @Field(() => TokenUpdateInput, {nullable:false})
    @Type(() => TokenUpdateInput)
    data!: TokenUpdateInput;

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    @Type(() => TokenWhereUniqueInput)
    where!: Prisma.AtLeast<TokenWhereUniqueInput, 'id' | 'token'>;
}
