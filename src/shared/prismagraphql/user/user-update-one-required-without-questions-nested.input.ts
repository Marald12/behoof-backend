import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutQuestionsInput } from './user-create-without-questions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutQuestionsInput } from './user-create-or-connect-without-questions.input';
import { UserUpsertWithoutQuestionsInput } from './user-upsert-without-questions.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutQuestionsInput } from './user-update-to-one-with-where-without-questions.input';

@InputType()
export class UserUpdateOneRequiredWithoutQuestionsNestedInput {

    @Field(() => UserCreateWithoutQuestionsInput, {nullable:true})
    @Type(() => UserCreateWithoutQuestionsInput)
    create?: UserCreateWithoutQuestionsInput;

    @Field(() => UserCreateOrConnectWithoutQuestionsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutQuestionsInput)
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput;

    @Field(() => UserUpsertWithoutQuestionsInput, {nullable:true})
    @Type(() => UserUpsertWithoutQuestionsInput)
    upsert?: UserUpsertWithoutQuestionsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutQuestionsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutQuestionsInput)
    update?: UserUpdateToOneWithWhereWithoutQuestionsInput;
}
