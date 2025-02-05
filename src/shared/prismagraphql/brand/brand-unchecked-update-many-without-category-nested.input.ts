import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutCategoryInput } from './brand-create-without-category.input';
import { Type } from 'class-transformer';
import { BrandCreateOrConnectWithoutCategoryInput } from './brand-create-or-connect-without-category.input';
import { BrandUpsertWithWhereUniqueWithoutCategoryInput } from './brand-upsert-with-where-unique-without-category.input';
import { BrandCreateManyCategoryInputEnvelope } from './brand-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { BrandUpdateWithWhereUniqueWithoutCategoryInput } from './brand-update-with-where-unique-without-category.input';
import { BrandUpdateManyWithWhereWithoutCategoryInput } from './brand-update-many-with-where-without-category.input';
import { BrandScalarWhereInput } from './brand-scalar-where.input';

@InputType()
export class BrandUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [BrandCreateWithoutCategoryInput], {nullable:true})
    @Type(() => BrandCreateWithoutCategoryInput)
    create?: Array<BrandCreateWithoutCategoryInput>;

    @Field(() => [BrandCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => BrandCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<BrandCreateOrConnectWithoutCategoryInput>;

    @Field(() => [BrandUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => BrandUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<BrandUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => BrandCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => BrandCreateManyCategoryInputEnvelope)
    createMany?: BrandCreateManyCategoryInputEnvelope;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BrandWhereUniqueInput, 'id'>>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BrandWhereUniqueInput, 'id'>>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BrandWhereUniqueInput, 'id'>>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BrandWhereUniqueInput, 'id'>>;

    @Field(() => [BrandUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => BrandUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<BrandUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [BrandUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => BrandUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<BrandUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [BrandScalarWhereInput], {nullable:true})
    @Type(() => BrandScalarWhereInput)
    deleteMany?: Array<BrandScalarWhereInput>;
}
