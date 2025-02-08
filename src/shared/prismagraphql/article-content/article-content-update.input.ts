import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ArticleContentUpdateimagesInput } from './article-content-updateimages.input';
import { EnumArticleContentTypesFieldUpdateOperationsInput } from '../prisma/enum-article-content-types-field-update-operations.input';
import { ArticleUpdateOneRequiredWithoutContentNestedInput } from '../article/article-update-one-required-without-content-nested.input';

@InputType()
export class ArticleContentUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => ArticleContentUpdateimagesInput, {nullable:true})
    images?: ArticleContentUpdateimagesInput;

    @Field(() => EnumArticleContentTypesFieldUpdateOperationsInput, {nullable:true})
    types?: EnumArticleContentTypesFieldUpdateOperationsInput;

    @Field(() => ArticleUpdateOneRequiredWithoutContentNestedInput, {nullable:true})
    article?: ArticleUpdateOneRequiredWithoutContentNestedInput;
}
