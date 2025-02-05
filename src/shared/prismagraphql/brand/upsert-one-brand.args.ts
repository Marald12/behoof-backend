import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Type } from 'class-transformer';
import { BrandCreateInput } from './brand-create.input';
import { BrandUpdateInput } from './brand-update.input';

@ArgsType()
export class UpsertOneBrandArgs {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    @Type(() => BrandWhereUniqueInput)
    where!: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => BrandCreateInput, {nullable:false})
    @Type(() => BrandCreateInput)
    create!: BrandCreateInput;

    @Field(() => BrandUpdateInput, {nullable:false})
    @Type(() => BrandUpdateInput)
    update!: BrandUpdateInput;
}
