import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutBrandInput } from './product-create-without-brand.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutBrandInput } from './product-create-or-connect-without-brand.input';
import { ProductUpsertWithWhereUniqueWithoutBrandInput } from './product-upsert-with-where-unique-without-brand.input';
import { ProductCreateManyBrandInputEnvelope } from './product-create-many-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutBrandInput } from './product-update-with-where-unique-without-brand.input';
import { ProductUpdateManyWithWhereWithoutBrandInput } from './product-update-many-with-where-without-brand.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutBrandNestedInput {

    @Field(() => [ProductCreateWithoutBrandInput], {nullable:true})
    @Type(() => ProductCreateWithoutBrandInput)
    create?: Array<ProductCreateWithoutBrandInput>;

    @Field(() => [ProductCreateOrConnectWithoutBrandInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutBrandInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBrandInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutBrandInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutBrandInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutBrandInput>;

    @Field(() => ProductCreateManyBrandInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyBrandInputEnvelope)
    createMany?: ProductCreateManyBrandInputEnvelope;

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

    @Field(() => [ProductUpdateWithWhereUniqueWithoutBrandInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutBrandInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutBrandInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutBrandInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutBrandInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutBrandInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
