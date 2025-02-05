import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUpdateOneRequiredWithoutBrandsNestedInput } from '../category/category-update-one-required-without-brands-nested.input';
import { ProductUpdateManyWithoutBrandNestedInput } from '../product/product-update-many-without-brand-nested.input';

@InputType()
export class BrandUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneRequiredWithoutBrandsNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutBrandsNestedInput;

    @Field(() => ProductUpdateManyWithoutBrandNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutBrandNestedInput;
}
