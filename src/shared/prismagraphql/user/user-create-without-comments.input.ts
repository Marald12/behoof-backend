import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateNestedManyWithoutUserInput } from '../question/question-create-nested-many-without-user.input';
import { ReviewCreateNestedManyWithoutUserInput } from '../review/review-create-nested-many-without-user.input';
import { ArticleCreateNestedManyWithoutUserInput } from '../article/article-create-nested-many-without-user.input';
import { ProductCreateNestedManyWithoutUsersFavoriteInput } from '../product/product-create-nested-many-without-users-favorite.input';

@InputType()
export class UserCreateWithoutCommentsInput {

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

    @Field(() => ProductCreateNestedManyWithoutUsersFavoriteInput, {nullable:true})
    favoriteProducts?: ProductCreateNestedManyWithoutUsersFavoriteInput;
}
