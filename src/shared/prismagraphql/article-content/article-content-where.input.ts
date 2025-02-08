import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumArticleContentTypesFilter } from '../prisma/enum-article-content-types-filter.input';
import { ArticleScalarRelationFilter } from '../article/article-scalar-relation-filter.input';

@InputType()
export class ArticleContentWhereInput {

    @Field(() => [ArticleContentWhereInput], {nullable:true})
    AND?: Array<ArticleContentWhereInput>;

    @Field(() => [ArticleContentWhereInput], {nullable:true})
    OR?: Array<ArticleContentWhereInput>;

    @Field(() => [ArticleContentWhereInput], {nullable:true})
    NOT?: Array<ArticleContentWhereInput>;

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

    @Field(() => ArticleScalarRelationFilter, {nullable:true})
    article?: ArticleScalarRelationFilter;
}
