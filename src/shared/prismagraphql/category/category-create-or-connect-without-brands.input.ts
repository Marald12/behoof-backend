import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutBrandsInput } from './category-create-without-brands.input';

@InputType()
export class CategoryCreateOrConnectWithoutBrandsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryCreateWithoutBrandsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutBrandsInput)
    create!: CategoryCreateWithoutBrandsInput;
}
