import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreatetagsInput } from './article-createtags.input';
import { Int } from '@nestjs/graphql';
import { ArticleContentCreateNestedManyWithoutArticleInput } from '../article-content/article-content-create-nested-many-without-article.input';
import { CommentCreateNestedManyWithoutArticleInput } from '../comment/comment-create-nested-many-without-article.input';
import { CategoryCreateNestedOneWithoutArticlesInput } from '../category/category-create-nested-one-without-articles.input';

@InputType()
export class ArticleCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => ArticleCreatetagsInput, {nullable:true})
    tags?: ArticleCreatetagsInput;

    @Field(() => String, {nullable:false})
    banner!: string;

    @Field(() => Int, {nullable:true})
    viewsCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ArticleContentCreateNestedManyWithoutArticleInput, {nullable:true})
    content?: ArticleContentCreateNestedManyWithoutArticleInput;

    @Field(() => CommentCreateNestedManyWithoutArticleInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutArticleInput;

    @Field(() => CategoryCreateNestedOneWithoutArticlesInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutArticlesInput;
}
