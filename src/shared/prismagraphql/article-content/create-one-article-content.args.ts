import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleContentCreateInput } from './article-content-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneArticleContentArgs {

    @Field(() => ArticleContentCreateInput, {nullable:false})
    @Type(() => ArticleContentCreateInput)
    data!: ArticleContentCreateInput;
}
