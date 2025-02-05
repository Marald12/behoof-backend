import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutUsersFavoriteInput } from './product-update-without-users-favorite.input';

@InputType()
export class ProductUpdateWithWhereUniqueWithoutUsersFavoriteInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutUsersFavoriteInput, {nullable:false})
    @Type(() => ProductUpdateWithoutUsersFavoriteInput)
    data!: ProductUpdateWithoutUsersFavoriteInput;
}
