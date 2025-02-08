import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArticleContentTypes } from '../prisma/article-content-types.enum';

@ObjectType()
export class ArticleContentMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => ArticleContentTypes, {nullable:true})
    types?: `${ArticleContentTypes}`;

    @Field(() => String, {nullable:true})
    articleId?: string;
}
