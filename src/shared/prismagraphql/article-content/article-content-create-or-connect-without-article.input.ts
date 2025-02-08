import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleContentWhereUniqueInput } from './article-content-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleContentCreateWithoutArticleInput } from './article-content-create-without-article.input';

@InputType()
export class ArticleContentCreateOrConnectWithoutArticleInput {

    @Field(() => ArticleContentWhereUniqueInput, {nullable:false})
    @Type(() => ArticleContentWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>;

    @Field(() => ArticleContentCreateWithoutArticleInput, {nullable:false})
    @Type(() => ArticleContentCreateWithoutArticleInput)
    create!: ArticleContentCreateWithoutArticleInput;
}
