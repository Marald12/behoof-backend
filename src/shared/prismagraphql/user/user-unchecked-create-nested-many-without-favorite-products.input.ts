import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFavoriteProductsInput } from './user-create-without-favorite-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFavoriteProductsInput } from './user-create-or-connect-without-favorite-products.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutFavoriteProductsInput {

    @Field(() => [UserCreateWithoutFavoriteProductsInput], {nullable:true})
    @Type(() => UserCreateWithoutFavoriteProductsInput)
    create?: Array<UserCreateWithoutFavoriteProductsInput>;

    @Field(() => [UserCreateOrConnectWithoutFavoriteProductsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFavoriteProductsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteProductsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
