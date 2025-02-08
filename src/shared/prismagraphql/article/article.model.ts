import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ArticleContent } from '../article-content/article-content.model';
import { Comment } from '../comment/comment.model';
import { Category } from '../category/category.model';
import { User } from '../user/user.model';
import { ArticleCount } from './article-count.output';

@ObjectType()
export class Article {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [String], {nullable:true})
    tags!: Array<string>;

    @Field(() => String, {nullable:false})
    banner!: string;

    @Field(() => Int, {defaultValue:0,nullable:false})
    viewsCount!: number;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [ArticleContent], {nullable:true})
    content?: Array<ArticleContent>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => Category, {nullable:false})
    category?: Category;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => ArticleCount, {nullable:false})
    _count?: ArticleCount;
}
