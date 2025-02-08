import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumArticleContentTypesWithAggregatesFilter } from '../prisma/enum-article-content-types-with-aggregates-filter.input';

@InputType()
export class ArticleContentScalarWhereWithAggregatesInput {

    @Field(() => [ArticleContentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ArticleContentScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleContentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ArticleContentScalarWhereWithAggregatesInput>;

    @Field(() => [ArticleContentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ArticleContentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;

    @Field(() => EnumArticleContentTypesWithAggregatesFilter, {nullable:true})
    types?: EnumArticleContentTypesWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    articleId?: StringWithAggregatesFilter;
}
