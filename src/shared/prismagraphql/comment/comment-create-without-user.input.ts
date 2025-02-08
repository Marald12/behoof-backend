import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateNestedOneWithoutCommentsInput } from '../article/article-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => ArticleCreateNestedOneWithoutCommentsInput, {nullable:false})
    article!: ArticleCreateNestedOneWithoutCommentsInput;
}
