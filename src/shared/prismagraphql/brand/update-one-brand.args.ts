import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandUpdateInput } from './brand-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';

@ArgsType()
export class UpdateOneBrandArgs {

    @Field(() => BrandUpdateInput, {nullable:false})
    @Type(() => BrandUpdateInput)
    data!: BrandUpdateInput;

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    @Type(() => BrandWhereUniqueInput)
    where!: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;
}
