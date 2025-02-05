import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFavoriteProductsInput } from './user-create-without-favorite-products.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFavoriteProductsInput } from './user-create-or-connect-without-favorite-products.input';
import { UserUpsertWithWhereUniqueWithoutFavoriteProductsInput } from './user-upsert-with-where-unique-without-favorite-products.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutFavoriteProductsInput } from './user-update-with-where-unique-without-favorite-products.input';
import { UserUpdateManyWithWhereWithoutFavoriteProductsInput } from './user-update-many-with-where-without-favorite-products.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutFavoriteProductsNestedInput {

    @Field(() => [UserCreateWithoutFavoriteProductsInput], {nullable:true})
    @Type(() => UserCreateWithoutFavoriteProductsInput)
    create?: Array<UserCreateWithoutFavoriteProductsInput>;

    @Field(() => [UserCreateOrConnectWithoutFavoriteProductsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFavoriteProductsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutFavoriteProductsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFavoriteProductsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutFavoriteProductsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutFavoriteProductsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFavoriteProductsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutFavoriteProductsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutFavoriteProductsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFavoriteProductsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutFavoriteProductsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutFavoriteProductsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
