import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutBrandsInput } from './category-create-without-brands.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutBrandsInput } from './category-create-or-connect-without-brands.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutBrandsInput {

    @Field(() => CategoryCreateWithoutBrandsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutBrandsInput)
    create?: CategoryCreateWithoutBrandsInput;

    @Field(() => CategoryCreateOrConnectWithoutBrandsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutBrandsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutBrandsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;
}
