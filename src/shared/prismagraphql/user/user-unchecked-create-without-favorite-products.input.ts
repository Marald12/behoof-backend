import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionUncheckedCreateNestedManyWithoutUserInput } from '../question/question-unchecked-create-nested-many-without-user.input';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutFavoriteProductsInput {

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
}
