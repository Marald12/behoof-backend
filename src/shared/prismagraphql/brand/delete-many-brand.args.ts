import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyBrandArgs {

    @Field(() => BrandWhereInput, {nullable:true})
    @Type(() => BrandWhereInput)
    where?: BrandWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
