import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutColorsInput } from './product-create-without-colors.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutColorsInput } from './product-create-or-connect-without-colors.input';
import { ProductUpsertWithWhereUniqueWithoutColorsInput } from './product-upsert-with-where-unique-without-colors.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutColorsInput } from './product-update-with-where-unique-without-colors.input';
import { ProductUpdateManyWithWhereWithoutColorsInput } from './product-update-many-with-where-without-colors.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUncheckedUpdateManyWithoutColorsNestedInput {

    @Field(() => [ProductCreateWithoutColorsInput], {nullable:true})
    @Type(() => ProductCreateWithoutColorsInput)
    create?: Array<ProductCreateWithoutColorsInput>;

    @Field(() => [ProductCreateOrConnectWithoutColorsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutColorsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutColorsInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutColorsInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutColorsInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutColorsInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutColorsInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutColorsInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutColorsInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutColorsInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutColorsInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutColorsInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
