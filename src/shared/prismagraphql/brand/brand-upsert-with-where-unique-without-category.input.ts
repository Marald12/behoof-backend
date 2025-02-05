import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Type } from 'class-transformer';
import { BrandUpdateWithoutCategoryInput } from './brand-update-without-category.input';
import { BrandCreateWithoutCategoryInput } from './brand-create-without-category.input';

@InputType()
export class BrandUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    @Type(() => BrandWhereUniqueInput)
    where!: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => BrandUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => BrandUpdateWithoutCategoryInput)
    update!: BrandUpdateWithoutCategoryInput;

    @Field(() => BrandCreateWithoutCategoryInput, {nullable:false})
    @Type(() => BrandCreateWithoutCategoryInput)
    create!: BrandCreateWithoutCategoryInput;
}
