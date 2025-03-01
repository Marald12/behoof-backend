import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { Brand } from '../brand/brand.model';
import { Article } from '../article/article.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {defaultValue:'',nullable:false})
    banner!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => [Brand], {nullable:true})
    brands?: Array<Brand>;

    @Field(() => [Article], {nullable:true})
    articles?: Array<Article>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
