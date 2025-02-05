import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutBrandsInput } from './category-create-without-brands.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutBrandsInput } from './category-create-or-connect-without-brands.input';
import { CategoryUpsertWithoutBrandsInput } from './category-upsert-without-brands.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateToOneWithWhereWithoutBrandsInput } from './category-update-to-one-with-where-without-brands.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutBrandsNestedInput {

    @Field(() => CategoryCreateWithoutBrandsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutBrandsInput)
    create?: CategoryCreateWithoutBrandsInput;

    @Field(() => CategoryCreateOrConnectWithoutBrandsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutBrandsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutBrandsInput;

    @Field(() => CategoryUpsertWithoutBrandsInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutBrandsInput)
    upsert?: CategoryUpsertWithoutBrandsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>;

    @Field(() => CategoryUpdateToOneWithWhereWithoutBrandsInput, {nullable:true})
    @Type(() => CategoryUpdateToOneWithWhereWithoutBrandsInput)
    update?: CategoryUpdateToOneWithWhereWithoutBrandsInput;
}
