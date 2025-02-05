import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateNestedManyWithoutCategoryInput } from '../brand/brand-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BrandCreateNestedManyWithoutCategoryInput, {nullable:true})
    brands?: BrandCreateNestedManyWithoutCategoryInput;
}
