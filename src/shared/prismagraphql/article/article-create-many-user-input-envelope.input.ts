import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateManyUserInput } from './article-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ArticleCreateManyUserInputEnvelope {

    @Field(() => [ArticleCreateManyUserInput], {nullable:false})
    @Type(() => ArticleCreateManyUserInput)
    data!: Array<ArticleCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
