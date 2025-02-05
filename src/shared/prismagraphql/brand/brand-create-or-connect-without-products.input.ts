import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Type } from 'class-transformer';
import { BrandCreateWithoutProductsInput } from './brand-create-without-products.input';

@InputType()
export class BrandCreateOrConnectWithoutProductsInput {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    @Type(() => BrandWhereUniqueInput)
    where!: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => BrandCreateWithoutProductsInput, {nullable:false})
    @Type(() => BrandCreateWithoutProductsInput)
    create!: BrandCreateWithoutProductsInput;
}
