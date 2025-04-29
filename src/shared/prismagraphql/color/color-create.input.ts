import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedManyWithoutColorsInput } from '../product/product-create-nested-many-without-colors.input';

@InputType()
export class ColorCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => ProductCreateNestedManyWithoutColorsInput, {nullable:true})
    products?: ProductCreateNestedManyWithoutColorsInput;
}
