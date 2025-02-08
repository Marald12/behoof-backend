import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumArticleContentTypesFilter } from '../prisma/enum-article-content-types-filter.input';

@InputType()
export class ArticleContentScalarWhereInput {

    @Field(() => [ArticleContentScalarWhereInput], {nullable:true})
    AND?: Array<ArticleContentScalarWhereInput>;

    @Field(() => [ArticleContentScalarWhereInput], {nullable:true})
    OR?: Array<ArticleContentScalarWhereInput>;

    @Field(() => [ArticleContentScalarWhereInput], {nullable:true})
    NOT?: Array<ArticleContentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;

    @Field(() => EnumArticleContentTypesFilter, {nullable:true})
    types?: EnumArticleContentTypesFilter;

    @Field(() => StringFilter, {nullable:true})
    articleId?: StringFilter;
}
