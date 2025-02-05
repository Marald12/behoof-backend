import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Type } from 'class-transformer';
import { BrandCreateWithoutCategoryInput } from './brand-create-without-category.input';

@InputType()
export class BrandCreateOrConnectWithoutCategoryInput {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    @Type(() => BrandWhereUniqueInput)
    where!: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => BrandCreateWithoutCategoryInput, {nullable:false})
    @Type(() => BrandCreateWithoutCategoryInput)
    create!: BrandCreateWithoutCategoryInput;
}
