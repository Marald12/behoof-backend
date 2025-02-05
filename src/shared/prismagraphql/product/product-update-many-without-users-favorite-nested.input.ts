import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutUsersFavoriteInput } from './product-create-without-users-favorite.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutUsersFavoriteInput } from './product-create-or-connect-without-users-favorite.input';
import { ProductUpsertWithWhereUniqueWithoutUsersFavoriteInput } from './product-upsert-with-where-unique-without-users-favorite.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateWithWhereUniqueWithoutUsersFavoriteInput } from './product-update-with-where-unique-without-users-favorite.input';
import { ProductUpdateManyWithWhereWithoutUsersFavoriteInput } from './product-update-many-with-where-without-users-favorite.input';
import { ProductScalarWhereInput } from './product-scalar-where.input';

@InputType()
export class ProductUpdateManyWithoutUsersFavoriteNestedInput {

    @Field(() => [ProductCreateWithoutUsersFavoriteInput], {nullable:true})
    @Type(() => ProductCreateWithoutUsersFavoriteInput)
    create?: Array<ProductCreateWithoutUsersFavoriteInput>;

    @Field(() => [ProductCreateOrConnectWithoutUsersFavoriteInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutUsersFavoriteInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutUsersFavoriteInput>;

    @Field(() => [ProductUpsertWithWhereUniqueWithoutUsersFavoriteInput], {nullable:true})
    @Type(() => ProductUpsertWithWhereUniqueWithoutUsersFavoriteInput)
    upsert?: Array<ProductUpsertWithWhereUniqueWithoutUsersFavoriteInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;

    @Field(() => [ProductUpdateWithWhereUniqueWithoutUsersFavoriteInput], {nullable:true})
    @Type(() => ProductUpdateWithWhereUniqueWithoutUsersFavoriteInput)
    update?: Array<ProductUpdateWithWhereUniqueWithoutUsersFavoriteInput>;

    @Field(() => [ProductUpdateManyWithWhereWithoutUsersFavoriteInput], {nullable:true})
    @Type(() => ProductUpdateManyWithWhereWithoutUsersFavoriteInput)
    updateMany?: Array<ProductUpdateManyWithWhereWithoutUsersFavoriteInput>;

    @Field(() => [ProductScalarWhereInput], {nullable:true})
    @Type(() => ProductScalarWhereInput)
    deleteMany?: Array<ProductScalarWhereInput>;
}
