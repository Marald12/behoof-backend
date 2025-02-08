import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionUncheckedCreateNestedManyWithoutUserInput } from '../question/question-unchecked-create-nested-many-without-user.input';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';
import { ArticleUncheckedCreateNestedManyWithoutUserInput } from '../article/article-unchecked-create-nested-many-without-user.input';
import { ProductUncheckedCreateNestedManyWithoutUsersFavoriteInput } from '../product/product-unchecked-create-nested-many-without-users-favorite.input';

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {

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

    @Field(() => QuestionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ArticleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutUsersFavoriteInput, {nullable:true})
    favoriteProducts?: ProductUncheckedCreateNestedManyWithoutUsersFavoriteInput;
}
