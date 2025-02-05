import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutBrandsInput } from '../category/category-create-nested-one-without-brands.input';

@InputType()
export class BrandCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CategoryCreateNestedOneWithoutBrandsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutBrandsInput;
}
