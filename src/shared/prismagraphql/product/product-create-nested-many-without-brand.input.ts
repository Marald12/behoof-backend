import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutBrandInput } from './product-create-without-brand.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutBrandInput } from './product-create-or-connect-without-brand.input';
import { ProductCreateManyBrandInputEnvelope } from './product-create-many-brand-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutBrandInput {

    @Field(() => [ProductCreateWithoutBrandInput], {nullable:true})
    @Type(() => ProductCreateWithoutBrandInput)
    create?: Array<ProductCreateWithoutBrandInput>;

    @Field(() => [ProductCreateOrConnectWithoutBrandInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutBrandInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutBrandInput>;

    @Field(() => ProductCreateManyBrandInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyBrandInputEnvelope)
    createMany?: ProductCreateManyBrandInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
