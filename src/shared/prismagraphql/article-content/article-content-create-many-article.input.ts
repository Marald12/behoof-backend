import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentCreateimagesInput } from './article-content-createimages.input';
import { ArticleContentTypes } from '../prisma/article-content-types.enum';

@InputType()
export class ArticleContentCreateManyArticleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => ArticleContentCreateimagesInput, {nullable:true})
    images?: ArticleContentCreateimagesInput;

    @Field(() => ArticleContentTypes, {nullable:false})
    types!: `${ArticleContentTypes}`;
}
