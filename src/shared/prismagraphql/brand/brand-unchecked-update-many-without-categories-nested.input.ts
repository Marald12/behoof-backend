import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutCategoriesInput } from './brand-create-without-categories.input';
import { Type } from 'class-transformer';
import { BrandCreateOrConnectWithoutCategoriesInput } from './brand-create-or-connect-without-categories.input';
import { BrandUpsertWithWhereUniqueWithoutCategoriesInput } from './brand-upsert-with-where-unique-without-categories.input';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { BrandUpdateWithWhereUniqueWithoutCategoriesInput } from './brand-update-with-where-unique-without-categories.input';
import { BrandUpdateManyWithWhereWithoutCategoriesInput } from './brand-update-many-with-where-without-categories.input';
import { BrandScalarWhereInput } from './brand-scalar-where.input';

@InputType()
export class BrandUncheckedUpdateManyWithoutCategoriesNestedInput {

    @Field(() => [BrandCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => BrandCreateWithoutCategoriesInput)
    create?: Array<BrandCreateWithoutCategoriesInput>;

    @Field(() => [BrandCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => BrandCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<BrandCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [BrandUpsertWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => BrandUpsertWithWhereUniqueWithoutCategoriesInput)
    upsert?: Array<BrandUpsertWithWhereUniqueWithoutCategoriesInput>;

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

    @Field(() => [BrandUpdateWithWhereUniqueWithoutCategoriesInput], {nullable:true})
    @Type(() => BrandUpdateWithWhereUniqueWithoutCategoriesInput)
    update?: Array<BrandUpdateWithWhereUniqueWithoutCategoriesInput>;

    @Field(() => [BrandUpdateManyWithWhereWithoutCategoriesInput], {nullable:true})
    @Type(() => BrandUpdateManyWithWhereWithoutCategoriesInput)
    updateMany?: Array<BrandUpdateManyWithWhereWithoutCategoriesInput>;

    @Field(() => [BrandScalarWhereInput], {nullable:true})
    @Type(() => BrandScalarWhereInput)
    deleteMany?: Array<BrandScalarWhereInput>;
}
