import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentTypes } from './article-content-types.enum';
import { NestedEnumArticleContentTypesFilter } from './nested-enum-article-content-types-filter.input';

@InputType()
export class EnumArticleContentTypesFilter {

    @Field(() => ArticleContentTypes, {nullable:true})
    equals?: `${ArticleContentTypes}`;

    @Field(() => [ArticleContentTypes], {nullable:true})
    in?: Array<`${ArticleContentTypes}`>;

    @Field(() => [ArticleContentTypes], {nullable:true})
    notIn?: Array<`${ArticleContentTypes}`>;

    @Field(() => NestedEnumArticleContentTypesFilter, {nullable:true})
    not?: NestedEnumArticleContentTypesFilter;
}
