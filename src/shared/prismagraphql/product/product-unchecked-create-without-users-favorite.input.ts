import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateimagesInput } from './product-createimages.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ColorUncheckedCreateNestedManyWithoutProductsInput } from '../color/color-unchecked-create-nested-many-without-products.input';
import { ReviewUncheckedCreateNestedManyWithoutProductInput } from '../review/review-unchecked-create-nested-many-without-product.input';

@InputType()
export class ProductUncheckedCreateWithoutUsersFavoriteInput {

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
    brandId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Int, {nullable:true})
    viewsCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ColorUncheckedCreateNestedManyWithoutProductsInput, {nullable:true})
    colors?: ColorUncheckedCreateNestedManyWithoutProductsInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutProductInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput;
}
