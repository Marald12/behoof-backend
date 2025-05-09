import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutBrandsInput } from '../category/category-unchecked-create-nested-many-without-brands.input';

@InputType()
export class BrandUncheckedCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutBrandsInput, {nullable:true})
    categories?: CategoryUncheckedCreateNestedManyWithoutBrandsInput;
}
