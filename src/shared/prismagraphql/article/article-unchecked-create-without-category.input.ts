import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreatetagsInput } from './article-createtags.input';
import { Int } from '@nestjs/graphql';
import { ArticleContentUncheckedCreateNestedManyWithoutArticleInput } from '../article-content/article-content-unchecked-create-nested-many-without-article.input';
import { CommentUncheckedCreateNestedManyWithoutArticleInput } from '../comment/comment-unchecked-create-nested-many-without-article.input';

@InputType()
export class ArticleUncheckedCreateWithoutCategoryInput {

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

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ArticleContentUncheckedCreateNestedManyWithoutArticleInput, {nullable:true})
    content?: ArticleContentUncheckedCreateNestedManyWithoutArticleInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutArticleInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput;
}
