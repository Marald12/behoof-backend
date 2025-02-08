import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreatetagsInput } from './article-createtags.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class ArticleCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => ArticleCreatetagsInput, {nullable:true})
    tags?: ArticleCreatetagsInput;

    @Field(() => String, {nullable:false})
    banner!: string;

    @Field(() => Int, {nullable:true})
    viewsCount?: number;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
