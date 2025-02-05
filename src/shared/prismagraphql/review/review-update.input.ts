import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReviewsNestedInput } from '../user/user-update-one-required-without-reviews-nested.input';
import { ProductUpdateOneRequiredWithoutReviewsNestedInput } from '../product/product-update-one-required-without-reviews-nested.input';

@InputType()
export class ReviewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    starsCount?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput;

    @Field(() => ProductUpdateOneRequiredWithoutReviewsNestedInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput;
}
