import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentTypes } from './article-content-types.enum';

@InputType()
export class NestedEnumArticleContentTypesFilter {

    @Field(() => ArticleContentTypes, {nullable:true})
    equals?: `${ArticleContentTypes}`;

    @Field(() => [ArticleContentTypes], {nullable:true})
    in?: Array<`${ArticleContentTypes}`>;

    @Field(() => [ArticleContentTypes], {nullable:true})
    notIn?: Array<`${ArticleContentTypes}`>;

    @Field(() => NestedEnumArticleContentTypesFilter, {nullable:true})
    not?: NestedEnumArticleContentTypesFilter;
}
