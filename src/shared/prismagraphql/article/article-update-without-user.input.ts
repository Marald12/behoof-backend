import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ArticleUpdatetagsInput } from './article-updatetags.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ArticleContentUpdateManyWithoutArticleNestedInput } from '../article-content/article-content-update-many-without-article-nested.input';
import { CommentUpdateManyWithoutArticleNestedInput } from '../comment/comment-update-many-without-article-nested.input';
import { CategoryUpdateOneRequiredWithoutArticlesNestedInput } from '../category/category-update-one-required-without-articles-nested.input';

@InputType()
export class ArticleUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => ArticleUpdatetagsInput, {nullable:true})
    tags?: ArticleUpdatetagsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    banner?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsCount?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ArticleContentUpdateManyWithoutArticleNestedInput, {nullable:true})
    content?: ArticleContentUpdateManyWithoutArticleNestedInput;

    @Field(() => CommentUpdateManyWithoutArticleNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutArticleNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutArticlesNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutArticlesNestedInput;
}
