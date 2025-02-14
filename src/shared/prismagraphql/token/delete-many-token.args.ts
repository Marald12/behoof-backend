import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereInput } from './token-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyTokenArgs {

    @Field(() => TokenWhereInput, {nullable:true})
    @Type(() => TokenWhereInput)
    where?: TokenWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
