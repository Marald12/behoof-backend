import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateimagesInput } from './product-createimages.input';
import { GraphQLJSON } from 'graphql-type-json';
import { ColorCreateNestedManyWithoutProductsInput } from '../color/color-create-nested-many-without-products.input';
import { BrandCreateNestedOneWithoutProductsInput } from '../brand/brand-create-nested-one-without-products.input';
import { CategoryCreateNestedOneWithoutProductsInput } from '../category/category-create-nested-one-without-products.input';
import { ReviewCreateNestedManyWithoutProductInput } from '../review/review-create-nested-many-without-product.input';

@InputType()
export class ProductCreateWithoutUsersFavoriteInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ColorCreateNestedManyWithoutProductsInput, {nullable:true})
    colors?: ColorCreateNestedManyWithoutProductsInput;

    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:false})
    brand!: BrandCreateNestedOneWithoutProductsInput;

    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutProductsInput;

    @Field(() => ReviewCreateNestedManyWithoutProductInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutProductInput;
}
