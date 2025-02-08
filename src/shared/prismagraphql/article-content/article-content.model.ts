import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ArticleContentTypes } from '../prisma/article-content-types.enum';
import { Article } from '../article/article.model';

@ObjectType()
export class ArticleContent {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => [String], {nullable:true})
    images!: Array<string>;

    @Field(() => ArticleContentTypes, {nullable:false})
    types!: `${ArticleContentTypes}`;

    @Field(() => String, {nullable:false})
    articleId!: string;

    @Field(() => Article, {nullable:false})
    article?: Article;
}
