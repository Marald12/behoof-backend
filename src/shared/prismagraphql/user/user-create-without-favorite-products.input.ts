import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateNestedManyWithoutUserInput } from '../question/question-create-nested-many-without-user.input';
import { ReviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';
import { ArticleCreateNestedManyWithoutUserInput } from '../article/article-create-nested-many-without-user.input';
import { CommentCreateNestedManyWithoutUserInput } from '../comment/comment-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutFavoriteProductsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => QuestionCreateNestedManyWithoutUserInput, {nullable:true})
    questions?: QuestionCreateNestedManyWithoutUserInput;

    @Field(() => ReviewCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutUserInput;

    @Field(() => ArticleCreateNestedManyWithoutUserInput, {nullable:true})
    articles?: ArticleCreateNestedManyWithoutUserInput;

    @Field(() => CommentCreateNestedManyWithoutUserInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutUserInput;
}
