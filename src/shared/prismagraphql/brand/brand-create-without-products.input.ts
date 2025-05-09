import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutBrandsInput } from '../category/category-create-nested-many-without-brands.input';

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

    @Field(() => CategoryCreateNestedManyWithoutBrandsInput, {nullable:true})
    categories?: CategoryCreateNestedManyWithoutBrandsInput;
}
