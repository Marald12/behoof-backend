import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUncheckedCreateNestedManyWithoutColorsInput } from '../product/product-unchecked-create-nested-many-without-colors.input';

@InputType()
export class ColorUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => ProductUncheckedCreateNestedManyWithoutColorsInput, {nullable:true})
    products?: ProductUncheckedCreateNestedManyWithoutColorsInput;
}
