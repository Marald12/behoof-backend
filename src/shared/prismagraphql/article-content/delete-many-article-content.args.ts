import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleContentWhereInput } from './article-content-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyArticleContentArgs {

    @Field(() => ArticleContentWhereInput, {nullable:true})
    @Type(() => ArticleContentWhereInput)
    where?: ArticleContentWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
