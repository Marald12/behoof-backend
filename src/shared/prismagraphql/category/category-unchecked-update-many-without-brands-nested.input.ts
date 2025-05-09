import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutBrandsInput } from './category-create-without-brands.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutBrandsInput } from './category-create-or-connect-without-brands.input';
import { CategoryUpsertWithWhereUniqueWithoutBrandsInput } from './category-upsert-with-where-unique-without-brands.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithWhereUniqueWithoutBrandsInput } from './category-update-with-where-unique-without-brands.input';
import { CategoryUpdateManyWithWhereWithoutBrandsInput } from './category-update-many-with-where-without-brands.input';
import { CategoryScalarWhereInput } from './category-scalar-where.input';

@InputType()
export class CategoryUncheckedUpdateManyWithoutBrandsNestedInput {

    @Field(() => [CategoryCreateWithoutBrandsInput], {nullable:true})
    @Type(() => CategoryCreateWithoutBrandsInput)
    create?: Array<CategoryCreateWithoutBrandsInput>;

    @Field(() => [CategoryCreateOrConnectWithoutBrandsInput], {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutBrandsInput)
    connectOrCreate?: Array<CategoryCreateOrConnectWithoutBrandsInput>;

    @Field(() => [CategoryUpsertWithWhereUniqueWithoutBrandsInput], {nullable:true})
    @Type(() => CategoryUpsertWithWhereUniqueWithoutBrandsInput)
    upsert?: Array<CategoryUpsertWithWhereUniqueWithoutBrandsInput>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryWhereUniqueInput], {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CategoryWhereUniqueInput, 'id'>>;

    @Field(() => [CategoryUpdateWithWhereUniqueWithoutBrandsInput], {nullable:true})
    @Type(() => CategoryUpdateWithWhereUniqueWithoutBrandsInput)
    update?: Array<CategoryUpdateWithWhereUniqueWithoutBrandsInput>;

    @Field(() => [CategoryUpdateManyWithWhereWithoutBrandsInput], {nullable:true})
    @Type(() => CategoryUpdateManyWithWhereWithoutBrandsInput)
    updateMany?: Array<CategoryUpdateManyWithWhereWithoutBrandsInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    @Type(() => CategoryScalarWhereInput)
    deleteMany?: Array<CategoryScalarWhereInput>;
}
