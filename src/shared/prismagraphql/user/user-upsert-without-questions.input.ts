import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutQuestionsInput } from './user-update-without-questions.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutQuestionsInput } from './user-create-without-questions.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutQuestionsInput {

    @Field(() => UserUpdateWithoutQuestionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutQuestionsInput)
    update!: UserUpdateWithoutQuestionsInput;

    @Field(() => UserCreateWithoutQuestionsInput, {nullable:false})
    @Type(() => UserCreateWithoutQuestionsInput)
    create!: UserCreateWithoutQuestionsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
