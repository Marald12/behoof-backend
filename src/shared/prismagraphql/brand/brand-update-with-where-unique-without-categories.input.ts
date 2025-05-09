import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Type } from 'class-transformer';
import { BrandUpdateWithoutCategoriesInput } from './brand-update-without-categories.input';

@InputType()
export class BrandUpdateWithWhereUniqueWithoutCategoriesInput {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    @Type(() => BrandWhereUniqueInput)
    where!: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => BrandUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => BrandUpdateWithoutCategoriesInput)
    data!: BrandUpdateWithoutCategoriesInput;
}
