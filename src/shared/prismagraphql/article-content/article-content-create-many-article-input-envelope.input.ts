import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentCreateManyArticleInput } from './article-content-create-many-article.input';
import { Type } from 'class-transformer';

@InputType()
export class ArticleContentCreateManyArticleInputEnvelope {

    @Field(() => [ArticleContentCreateManyArticleInput], {nullable:false})
    @Type(() => ArticleContentCreateManyArticleInput)
    data!: Array<ArticleContentCreateManyArticleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
