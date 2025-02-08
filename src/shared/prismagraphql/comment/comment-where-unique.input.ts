import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { ArticleScalarRelationFilter } from '../article/article-scalar-relation-filter.input';

@InputType()
export class CommentWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    articleId?: StringFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => ArticleScalarRelationFilter, {nullable:true})
    article?: ArticleScalarRelationFilter;
}
