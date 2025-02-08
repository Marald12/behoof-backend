import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleContentWhereUniqueInput } from './article-content-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleContentCreateInput } from './article-content-create.input';
import { ArticleContentUpdateInput } from './article-content-update.input';

@ArgsType()
export class UpsertOneArticleContentArgs {

    @Field(() => ArticleContentWhereUniqueInput, {nullable:false})
    @Type(() => ArticleContentWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>;

    @Field(() => ArticleContentCreateInput, {nullable:false})
    @Type(() => ArticleContentCreateInput)
    create!: ArticleContentCreateInput;

    @Field(() => ArticleContentUpdateInput, {nullable:false})
    @Type(() => ArticleContentUpdateInput)
    update!: ArticleContentUpdateInput;
}
