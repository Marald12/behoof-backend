import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutBrandsInput } from './category-update-without-brands.input';

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutBrandsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateWithoutBrandsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutBrandsInput)
    data!: CategoryUpdateWithoutBrandsInput;
}
