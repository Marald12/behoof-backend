import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleContentUpdateManyMutationInput } from './article-content-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ArticleContentWhereInput } from './article-content-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyArticleContentArgs {

    @Field(() => ArticleContentUpdateManyMutationInput, {nullable:false})
    @Type(() => ArticleContentUpdateManyMutationInput)
    data!: ArticleContentUpdateManyMutationInput;

    @Field(() => ArticleContentWhereInput, {nullable:true})
    @Type(() => ArticleContentWhereInput)
    where?: ArticleContentWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
