import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleContentCreateManyInput } from './article-content-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyArticleContentArgs {

    @Field(() => [ArticleContentCreateManyInput], {nullable:false})
    @Type(() => ArticleContentCreateManyInput)
    data!: Array<ArticleContentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
