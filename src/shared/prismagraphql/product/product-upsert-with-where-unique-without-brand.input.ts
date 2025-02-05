import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutBrandInput } from './product-update-without-brand.input';
import { ProductCreateWithoutBrandInput } from './product-create-without-brand.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutBrandInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutBrandInput, {nullable:false})
    @Type(() => ProductUpdateWithoutBrandInput)
    update!: ProductUpdateWithoutBrandInput;

    @Field(() => ProductCreateWithoutBrandInput, {nullable:false})
    @Type(() => ProductCreateWithoutBrandInput)
    create!: ProductCreateWithoutBrandInput;
}
