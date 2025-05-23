import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutBrandsNestedInput } from '../category/category-unchecked-update-many-without-brands-nested.input';
import { ProductUncheckedUpdateManyWithoutBrandNestedInput } from '../product/product-unchecked-update-many-without-brand-nested.input';

@InputType()
export class BrandUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => CategoryUncheckedUpdateManyWithoutBrandsNestedInput, {nullable:true})
    categories?: CategoryUncheckedUpdateManyWithoutBrandsNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutBrandNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput;
}
