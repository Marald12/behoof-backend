import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandUncheckedCreateNestedManyWithoutCategoryInput } from '../brand/brand-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateWithoutProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => BrandUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    brands?: BrandUncheckedCreateNestedManyWithoutCategoryInput;
}
