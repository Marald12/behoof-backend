import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutProductsInput } from './brand-create-without-products.input';
import { Type } from 'class-transformer';
import { BrandCreateOrConnectWithoutProductsInput } from './brand-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';

@InputType()
export class BrandCreateNestedOneWithoutProductsInput {

    @Field(() => BrandCreateWithoutProductsInput, {nullable:true})
    @Type(() => BrandCreateWithoutProductsInput)
    create?: BrandCreateWithoutProductsInput;

    @Field(() => BrandCreateOrConnectWithoutProductsInput, {nullable:true})
    @Type(() => BrandCreateOrConnectWithoutProductsInput)
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput;

    @Field(() => BrandWhereUniqueInput, {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    connect?: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;
}
