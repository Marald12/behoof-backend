import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutQuestionsInput } from './user-create-without-questions.input';

@InputType()
export class UserCreateOrConnectWithoutQuestionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutQuestionsInput, {nullable:false})
    @Type(() => UserCreateWithoutQuestionsInput)
    create!: UserCreateWithoutQuestionsInput;
}
