import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutUsersFavoriteInput } from './product-create-without-users-favorite.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutUsersFavoriteInput } from './product-create-or-connect-without-users-favorite.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedManyWithoutUsersFavoriteInput {

    @Field(() => [ProductCreateWithoutUsersFavoriteInput], {nullable:true})
    @Type(() => ProductCreateWithoutUsersFavoriteInput)
    create?: Array<ProductCreateWithoutUsersFavoriteInput>;

    @Field(() => [ProductCreateOrConnectWithoutUsersFavoriteInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutUsersFavoriteInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutUsersFavoriteInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
