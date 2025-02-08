import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleContentUpdateInput } from './article-content-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ArticleContentWhereUniqueInput } from './article-content-where-unique.input';

@ArgsType()
export class UpdateOneArticleContentArgs {

    @Field(() => ArticleContentUpdateInput, {nullable:false})
    @Type(() => ArticleContentUpdateInput)
    data!: ArticleContentUpdateInput;

    @Field(() => ArticleContentWhereUniqueInput, {nullable:false})
    @Type(() => ArticleContentWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>;
}
