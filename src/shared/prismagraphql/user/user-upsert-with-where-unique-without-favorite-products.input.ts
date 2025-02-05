import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFavoriteProductsInput } from './user-update-without-favorite-products.input';
import { UserCreateWithoutFavoriteProductsInput } from './user-create-without-favorite-products.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFavoriteProductsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutFavoriteProductsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFavoriteProductsInput)
    update!: UserUpdateWithoutFavoriteProductsInput;

    @Field(() => UserCreateWithoutFavoriteProductsInput, {nullable:false})
    @Type(() => UserCreateWithoutFavoriteProductsInput)
    create!: UserCreateWithoutFavoriteProductsInput;
}
