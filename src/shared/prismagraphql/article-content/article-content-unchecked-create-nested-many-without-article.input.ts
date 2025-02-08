import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentCreateWithoutArticleInput } from './article-content-create-without-article.input';
import { Type } from 'class-transformer';
import { ArticleContentCreateOrConnectWithoutArticleInput } from './article-content-create-or-connect-without-article.input';
import { ArticleContentCreateManyArticleInputEnvelope } from './article-content-create-many-article-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ArticleContentWhereUniqueInput } from './article-content-where-unique.input';

@InputType()
export class ArticleContentUncheckedCreateNestedManyWithoutArticleInput {

    @Field(() => [ArticleContentCreateWithoutArticleInput], {nullable:true})
    @Type(() => ArticleContentCreateWithoutArticleInput)
    create?: Array<ArticleContentCreateWithoutArticleInput>;

    @Field(() => [ArticleContentCreateOrConnectWithoutArticleInput], {nullable:true})
    @Type(() => ArticleContentCreateOrConnectWithoutArticleInput)
    connectOrCreate?: Array<ArticleContentCreateOrConnectWithoutArticleInput>;

    @Field(() => ArticleContentCreateManyArticleInputEnvelope, {nullable:true})
    @Type(() => ArticleContentCreateManyArticleInputEnvelope)
    createMany?: ArticleContentCreateManyArticleInputEnvelope;

    @Field(() => [ArticleContentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>>;
}
