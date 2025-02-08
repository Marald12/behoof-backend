import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentScalarWhereInput } from './article-content-scalar-where.input';
import { Type } from 'class-transformer';
import { ArticleContentUpdateManyMutationInput } from './article-content-update-many-mutation.input';

@InputType()
export class ArticleContentUpdateManyWithWhereWithoutArticleInput {

    @Field(() => ArticleContentScalarWhereInput, {nullable:false})
    @Type(() => ArticleContentScalarWhereInput)
    where!: ArticleContentScalarWhereInput;

    @Field(() => ArticleContentUpdateManyMutationInput, {nullable:false})
    @Type(() => ArticleContentUpdateManyMutationInput)
    data!: ArticleContentUpdateManyMutationInput;
}
