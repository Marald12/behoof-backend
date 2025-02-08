import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ArticleContentListRelationFilter } from '../article-content/article-content-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { CategoryScalarRelationFilter } from '../category/category-scalar-relation-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class ArticleWhereInput {

    @Field(() => [ArticleWhereInput], {nullable:true})
    AND?: Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {nullable:true})
    OR?: Array<ArticleWhereInput>;

    @Field(() => [ArticleWhereInput], {nullable:true})
    NOT?: Array<ArticleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    banner?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    viewsCount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ArticleContentListRelationFilter, {nullable:true})
    content?: ArticleContentListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => CategoryScalarRelationFilter, {nullable:true})
    category?: CategoryScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
