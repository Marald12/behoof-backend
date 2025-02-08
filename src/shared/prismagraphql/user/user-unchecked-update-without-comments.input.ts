import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { QuestionUncheckedUpdateManyWithoutUserNestedInput } from '../question/question-unchecked-update-many-without-user-nested.input';
import { ReviewUncheckedUpdateManyWithoutUserNestedInput } from '../review/review-unchecked-update-many-without-user-nested.input';
import { ArticleUncheckedUpdateManyWithoutUserNestedInput } from '../article/article-unchecked-update-many-without-user-nested.input';
import { ProductUncheckedUpdateManyWithoutUsersFavoriteNestedInput } from '../product/product-unchecked-update-many-without-users-favorite-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutCommentsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    country?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    city?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => QuestionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ArticleUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ProductUncheckedUpdateManyWithoutUsersFavoriteNestedInput, {nullable:true})
    favoriteProducts?: ProductUncheckedUpdateManyWithoutUsersFavoriteNestedInput;
}
