import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateimagesInput } from './product-createimages.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ColorUncheckedCreateNestedManyWithoutProductsInput } from '../color/color-unchecked-create-nested-many-without-products.input';
import { ReviewUncheckedCreateNestedManyWithoutProductInput } from '../review/review-unchecked-create-nested-many-without-product.input';
import { UserUncheckedCreateNestedManyWithoutFavoriteProductsInput } from '../user/user-unchecked-create-nested-many-without-favorite-products.input';

@InputType()
export class ProductUncheckedCreateWithoutBrandInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: ProductCreateimagesInput;

    @Field(() => GraphQLJSON, {nullable:false})
    characteristics!: any;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ColorUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    colors?: ColorUncheckedCreateNestedManyWithoutProductsInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutFavoriteProductsInput, {nullable:true})
    usersFavorite?: UserUncheckedCreateNestedManyWithoutFavoriteProductsInput;
}
