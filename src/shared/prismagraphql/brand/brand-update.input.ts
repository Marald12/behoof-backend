import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUpdateManyWithoutBrandsNestedInput } from '../category/category-update-many-without-brands-nested.input';
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

    @Field(() => CategoryUpdateManyWithoutBrandsNestedInput, {nullable:true})
    categories?: CategoryUpdateManyWithoutBrandsNestedInput;

    @Field(() => ProductUpdateManyWithoutBrandNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutBrandNestedInput;
}
