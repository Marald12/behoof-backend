import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutQuestionsInput } from '../user/user-create-nested-one-without-questions.input';

@InputType()
export class QuestionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    question!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutQuestionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutQuestionsInput;
}
