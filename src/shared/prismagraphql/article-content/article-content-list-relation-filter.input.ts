import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleContentWhereInput } from './article-content-where.input';

@InputType()
export class ArticleContentListRelationFilter {

    @Field(() => ArticleContentWhereInput, {nullable:true})
    every?: ArticleContentWhereInput;

    @Field(() => ArticleContentWhereInput, {nullable:true})
    some?: ArticleContentWhereInput;

    @Field(() => ArticleContentWhereInput, {nullable:true})
    none?: ArticleContentWhereInput;
}
