import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutBrandInput } from '../product/product-unchecked-create-nested-many-without-brand.input';

@InputType()
export class BrandUncheckedCreateWithoutCategoriesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutBrandInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput;
}
