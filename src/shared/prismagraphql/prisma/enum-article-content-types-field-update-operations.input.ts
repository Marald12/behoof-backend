import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentTypes } from './article-content-types.enum';

@InputType()
export class EnumArticleContentTypesFieldUpdateOperationsInput {

    @Field(() => ArticleContentTypes, {nullable:true})
    set?: `${ArticleContentTypes}`;
}
