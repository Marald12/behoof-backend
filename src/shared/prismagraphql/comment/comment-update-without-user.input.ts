import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ArticleUpdateOneRequiredWithoutCommentsNestedInput } from '../article/article-update-one-required-without-comments-nested.input';

@InputType()
export class CommentUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: StringFieldUpdateOperationsInput;

    @Field(() => ArticleUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    article?: ArticleUpdateOneRequiredWithoutCommentsNestedInput;
}
