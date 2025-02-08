import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutCategoryInput } from '../product/product-create-nested-many-without-category.input';
import { BrandCreateNestedManyWithoutCategoryInput } from '../brand/brand-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutArticlesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutCategoryInput;

    @Field(() => BrandCreateNestedManyWithoutCategoryInput, {nullable:true})
    brands?: BrandCreateNestedManyWithoutCategoryInput;
}
