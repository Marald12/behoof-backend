import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutBrandsInput } from '../category/category-unchecked-create-nested-many-without-brands.input';
import { ProductUncheckedCreateNestedManyWithoutBrandInput } from '../product/product-unchecked-create-nested-many-without-brand.input';

@InputType()
export class BrandUncheckedCreateInput {

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

    @Field(() => ProductUncheckedCreateNestedManyWithoutBrandInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput;
}
