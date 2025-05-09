import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutBrandsInput } from './category-update-without-brands.input';
import { CategoryCreateWithoutBrandsInput } from './category-create-without-brands.input';

@InputType()
export class CategoryUpsertWithWhereUniqueWithoutBrandsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateWithoutBrandsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutBrandsInput)
    update!: CategoryUpdateWithoutBrandsInput;

    @Field(() => CategoryCreateWithoutBrandsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutBrandsInput)
    create!: CategoryCreateWithoutBrandsInput;
}
