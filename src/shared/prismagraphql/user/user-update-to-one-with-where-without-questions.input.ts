import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutQuestionsInput } from './user-update-without-questions.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutQuestionsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutQuestionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutQuestionsInput)
    data!: UserUpdateWithoutQuestionsInput;
}
