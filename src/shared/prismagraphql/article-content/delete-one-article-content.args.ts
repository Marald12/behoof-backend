import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleContentWhereUniqueInput } from './article-content-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneArticleContentArgs {

    @Field(() => ArticleContentWhereUniqueInput, {nullable:false})
    @Type(() => ArticleContentWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleContentWhereUniqueInput, 'id'>;
}
