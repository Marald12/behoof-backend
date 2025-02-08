import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentTypes } from './article-content-types.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumArticleContentTypesFilter } from './nested-enum-article-content-types-filter.input';

@InputType()
export class NestedEnumArticleContentTypesWithAggregatesFilter {

    @Field(() => ArticleContentTypes, {nullable:true})
    equals?: `${ArticleContentTypes}`;

    @Field(() => [ArticleContentTypes], {nullable:true})
    in?: Array<`${ArticleContentTypes}`>;

    @Field(() => [ArticleContentTypes], {nullable:true})
    notIn?: Array<`${ArticleContentTypes}`>;

    @Field(() => NestedEnumArticleContentTypesWithAggregatesFilter, {nullable:true})
    not?: NestedEnumArticleContentTypesWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumArticleContentTypesFilter, {nullable:true})
    _min?: NestedEnumArticleContentTypesFilter;

    @Field(() => NestedEnumArticleContentTypesFilter, {nullable:true})
    _max?: NestedEnumArticleContentTypesFilter;
}
