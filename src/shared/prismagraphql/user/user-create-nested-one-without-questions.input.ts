import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutQuestionsInput } from './user-create-without-questions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutQuestionsInput } from './user-create-or-connect-without-questions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutQuestionsInput {

    @Field(() => UserCreateWithoutQuestionsInput, {nullable:true})
    @Type(() => UserCreateWithoutQuestionsInput)
    create?: UserCreateWithoutQuestionsInput;

    @Field(() => UserCreateOrConnectWithoutQuestionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutQuestionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
