import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutUserInput } from './question-create-without-user.input';
import { Type } from 'class-transformer';
import { QuestionCreateOrConnectWithoutUserInput } from './question-create-or-connect-without-user.input';
import { QuestionCreateManyUserInputEnvelope } from './question-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { QuestionWhereUniqueInput } from './question-where-unique.input';

@InputType()
export class QuestionCreateNestedManyWithoutUserInput {

    @Field(() => [QuestionCreateWithoutUserInput], {nullable:true})
    @Type(() => QuestionCreateWithoutUserInput)
    create?: Array<QuestionCreateWithoutUserInput>;

    @Field(() => [QuestionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => QuestionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<QuestionCreateOrConnectWithoutUserInput>;

    @Field(() => QuestionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => QuestionCreateManyUserInputEnvelope)
    createMany?: QuestionCreateManyUserInputEnvelope;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;
}
