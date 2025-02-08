import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleContentWhereUniqueInput } from './article-content-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleContentUpdateWithoutArticleInput } from './article-content-update-without-article.input';

@InputType()
export class ArticleContentUpdateWithWhereUniqueWithoutArticleInput {

    @Field(() => ArticleContentWhereUniqueInput, {nullable:false})
    @Type(() => ArticleContentWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>;

    @Field(() => ArticleContentUpdateWithoutArticleInput, {nullable:false})
    @Type(() => ArticleContentUpdateWithoutArticleInput)
    data!: ArticleContentUpdateWithoutArticleInput;
}
