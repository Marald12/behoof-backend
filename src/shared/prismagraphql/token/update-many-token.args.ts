import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenUpdateManyMutationInput } from './token-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TokenWhereInput } from './token-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTokenArgs {

    @Field(() => TokenUpdateManyMutationInput, {nullable:false})
    @Type(() => TokenUpdateManyMutationInput)
    data!: TokenUpdateManyMutationInput;

    @Field(() => TokenWhereInput, {nullable:true})
    @Type(() => TokenWhereInput)
    where?: TokenWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
