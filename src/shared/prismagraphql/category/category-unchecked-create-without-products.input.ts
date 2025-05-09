import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandUncheckedCreateNestedManyWithoutCategoriesInput } from '../brand/brand-unchecked-create-nested-many-without-categories.input';
import { ArticleUncheckedCreateNestedManyWithoutCategoryInput } from '../article/article-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateWithoutProductsInput {

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

    @Field(() => BrandUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    brands?: BrandUncheckedCreateNestedManyWithoutCategoriesInput;

    @Field(() => ArticleUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    articles?: ArticleUncheckedCreateNestedManyWithoutCategoryInput;
}
