import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutColorsInput } from './product-update-without-colors.input';
import { ProductCreateWithoutColorsInput } from './product-create-without-colors.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutColorsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutColorsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutColorsInput)
    update!: ProductUpdateWithoutColorsInput;

    @Field(() => ProductCreateWithoutColorsInput, {nullable:false})
    @Type(() => ProductCreateWithoutColorsInput)
    create!: ProductCreateWithoutColorsInput;
}
