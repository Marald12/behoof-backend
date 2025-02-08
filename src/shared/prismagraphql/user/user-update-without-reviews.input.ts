import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { QuestionUpdateManyWithoutUserNestedInput } from '../question/question-update-many-without-user-nested.input';
import { ArticleUpdateManyWithoutUserNestedInput } from '../article/article-update-many-without-user-nested.input';
import { CommentUpdateManyWithoutUserNestedInput } from '../comment/comment-update-many-without-user-nested.input';
import { ProductUpdateManyWithoutUsersFavoriteNestedInput } from '../product/product-update-many-without-users-favorite-nested.input';

@InputType()
export class UserUpdateWithoutReviewsInput {

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

    @Field(() => QuestionUpdateManyWithoutUserNestedInput, {nullable:true})
    questions?: QuestionUpdateManyWithoutUserNestedInput;

    @Field(() => ArticleUpdateManyWithoutUserNestedInput, {nullable:true})
    articles?: ArticleUpdateManyWithoutUserNestedInput;

    @Field(() => CommentUpdateManyWithoutUserNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutUserNestedInput;

    @Field(() => ProductUpdateManyWithoutUsersFavoriteNestedInput, {nullable:true})
    favoriteProducts?: ProductUpdateManyWithoutUsersFavoriteNestedInput;
}
