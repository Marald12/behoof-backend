import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutCategoryInput } from '../product/product-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateWithoutBrandsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput;
}
