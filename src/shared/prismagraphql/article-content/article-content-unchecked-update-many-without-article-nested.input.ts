import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentCreateWithoutArticleInput } from './article-content-create-without-article.input';
import { Type } from 'class-transformer';
import { ArticleContentCreateOrConnectWithoutArticleInput } from './article-content-create-or-connect-without-article.input';
import { ArticleContentUpsertWithWhereUniqueWithoutArticleInput } from './article-content-upsert-with-where-unique-without-article.input';
import { ArticleContentCreateManyArticleInputEnvelope } from './article-content-create-many-article-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ArticleContentWhereUniqueInput } from './article-content-where-unique.input';
import { ArticleContentUpdateWithWhereUniqueWithoutArticleInput } from './article-content-update-with-where-unique-without-article.input';
import { ArticleContentUpdateManyWithWhereWithoutArticleInput } from './article-content-update-many-with-where-without-article.input';
import { ArticleContentScalarWhereInput } from './article-content-scalar-where.input';

@InputType()
export class ArticleContentUncheckedUpdateManyWithoutArticleNestedInput {

    @Field(() => [ArticleContentCreateWithoutArticleInput], {nullable:true})
    @Type(() => ArticleContentCreateWithoutArticleInput)
    create?: Array<ArticleContentCreateWithoutArticleInput>;

    @Field(() => [ArticleContentCreateOrConnectWithoutArticleInput], {nullable:true})
    @Type(() => ArticleContentCreateOrConnectWithoutArticleInput)
    connectOrCreate?: Array<ArticleContentCreateOrConnectWithoutArticleInput>;

    @Field(() => [ArticleContentUpsertWithWhereUniqueWithoutArticleInput], {nullable:true})
    @Type(() => ArticleContentUpsertWithWhereUniqueWithoutArticleInput)
    upsert?: Array<ArticleContentUpsertWithWhereUniqueWithoutArticleInput>;

    @Field(() => ArticleContentCreateManyArticleInputEnvelope, {nullable:true})
    @Type(() => ArticleContentCreateManyArticleInputEnvelope)
    createMany?: ArticleContentCreateManyArticleInputEnvelope;

    @Field(() => [ArticleContentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleContentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleContentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleContentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleContentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleContentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleContentWhereUniqueInput], {nullable:true})
    @Type(() => ArticleContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleContentUpdateWithWhereUniqueWithoutArticleInput], {nullable:true})
    @Type(() => ArticleContentUpdateWithWhereUniqueWithoutArticleInput)
    update?: Array<ArticleContentUpdateWithWhereUniqueWithoutArticleInput>;

    @Field(() => [ArticleContentUpdateManyWithWhereWithoutArticleInput], {nullable:true})
    @Type(() => ArticleContentUpdateManyWithWhereWithoutArticleInput)
    updateMany?: Array<ArticleContentUpdateManyWithWhereWithoutArticleInput>;

    @Field(() => [ArticleContentScalarWhereInput], {nullable:true})
    @Type(() => ArticleContentScalarWhereInput)
    deleteMany?: Array<ArticleContentScalarWhereInput>;
}
