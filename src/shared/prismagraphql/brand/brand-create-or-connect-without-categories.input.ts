import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Type } from 'class-transformer';
import { BrandCreateWithoutCategoriesInput } from './brand-create-without-categories.input';

@InputType()
export class BrandCreateOrConnectWithoutCategoriesInput {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    @Type(() => BrandWhereUniqueInput)
    where!: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => BrandCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => BrandCreateWithoutCategoriesInput)
    create!: BrandCreateWithoutCategoriesInput;
}
