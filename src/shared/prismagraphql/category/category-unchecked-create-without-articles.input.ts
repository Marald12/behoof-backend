import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutCategoryInput } from '../product/product-unchecked-create-nested-many-without-category.input';
import { BrandUncheckedCreateNestedManyWithoutCategoriesInput } from '../brand/brand-unchecked-create-nested-many-without-categories.input';

@InputType()
export class CategoryUncheckedCreateWithoutArticlesInput {

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

    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput;

    @Field(() => BrandUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    brands?: BrandUncheckedCreateNestedManyWithoutCategoriesInput;
}
