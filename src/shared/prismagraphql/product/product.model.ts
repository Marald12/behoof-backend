import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Color } from '../color/color.model';
import { Brand } from '../brand/brand.model';
import { Category } from '../category/category.model';
import { Review } from '../review/review.model';
import { User } from '../user/user.model';
import { ProductCount } from './product-count.output';

@ObjectType()
export class Product {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => [String], {nullable:true})
    images!: Array<string>;

    @Field(() => GraphQLJSON, {nullable:false})
    characteristics!: any;

    @Field(() => String, {nullable:false})
    brandId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Int, {defaultValue:0,nullable:false})
    viewsCount!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Color], {nullable:true})
    colors?: Array<Color>;

    @Field(() => Brand, {nullable:false})
    brand?: Brand;

    @Field(() => Category, {nullable:false})
    category?: Category;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [User], {nullable:true})
    usersFavorite?: Array<User>;

    @Field(() => ProductCount, {nullable:false})
    _count?: ProductCount;
}
