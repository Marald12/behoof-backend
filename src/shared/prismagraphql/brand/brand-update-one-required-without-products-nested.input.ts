import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutProductsInput } from './brand-create-without-products.input';
import { Type } from 'class-transformer';
import { BrandCreateOrConnectWithoutProductsInput } from './brand-create-or-connect-without-products.input';
import { BrandUpsertWithoutProductsInput } from './brand-upsert-without-products.input';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { BrandUpdateToOneWithWhereWithoutProductsInput } from './brand-update-to-one-with-where-without-products.input';

@InputType()
export class BrandUpdateOneRequiredWithoutProductsNestedInput {

    @Field(() => BrandCreateWithoutProductsInput, {nullable:true})
    @Type(() => BrandCreateWithoutProductsInput)
    create?: BrandCreateWithoutProductsInput;

    @Field(() => BrandCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => BrandCreateOrConnectWithoutProductsInput)
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput;

    @Field(() => BrandUpsertWithoutProductsInput, {nullable:true})
    @Type(() => BrandUpsertWithoutProductsInput)
    upsert?: BrandUpsertWithoutProductsInput;

    @Field(() => BrandWhereUniqueInput, {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    connect?: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => BrandUpdateToOneWithWhereWithoutProductsInput, {nullable:true})
    @Type(() => BrandUpdateToOneWithWhereWithoutProductsInput)
    update?: BrandUpdateToOneWithWhereWithoutProductsInput;
}
