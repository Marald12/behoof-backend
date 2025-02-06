import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ProductUpdateimagesInput } from './product-updateimages.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ColorUncheckedUpdateManyWithoutProductsNestedInput } from '../color/color-unchecked-update-many-without-products-nested.input';
import { ReviewUncheckedUpdateManyWithoutProductNestedInput } from '../review/review-unchecked-update-many-without-product-nested.input';

@InputType()
export class ProductUncheckedUpdateWithoutUsersFavoriteInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rating?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: ProductUpdateimagesInput;

    @Field(() => GraphQLJSON, {nullable:true})
    characteristics?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brandId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    categoryId?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsCount?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ColorUncheckedUpdateManyWithoutProductsNestedInput, {nullable:true})
    colors?: ColorUncheckedUpdateManyWithoutProductsNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutProductNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput;
}
