import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutColorsInput } from './product-create-without-colors.input';

@InputType()
export class ProductCreateOrConnectWithoutColorsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutColorsInput, {nullable:false})
    @Type(() => ProductCreateWithoutColorsInput)
    create!: ProductCreateWithoutColorsInput;
}
