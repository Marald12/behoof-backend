import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateNestedManyWithoutCategoriesInput } from '../brand/brand-create-nested-many-without-categories.input';
import { ArticleCreateNestedManyWithoutCategoryInput } from '../article/article-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BrandCreateNestedManyWithoutCategoriesInput, {nullable:true})
    brands?: BrandCreateNestedManyWithoutCategoriesInput;

    @Field(() => ArticleCreateNestedManyWithoutCategoryInput, {nullable:true})
    articles?: ArticleCreateNestedManyWithoutCategoryInput;
}
