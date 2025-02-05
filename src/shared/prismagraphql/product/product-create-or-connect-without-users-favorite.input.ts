import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutUsersFavoriteInput } from './product-create-without-users-favorite.input';

@InputType()
export class ProductCreateOrConnectWithoutUsersFavoriteInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutUsersFavoriteInput, {nullable:false})
    @Type(() => ProductCreateWithoutUsersFavoriteInput)
    create!: ProductCreateWithoutUsersFavoriteInput;
}
