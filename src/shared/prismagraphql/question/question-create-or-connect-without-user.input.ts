import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionCreateWithoutUserInput } from './question-create-without-user.input';

@InputType()
export class QuestionCreateOrConnectWithoutUserInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>;

    @Field(() => QuestionCreateWithoutUserInput, {nullable:false})
    @Type(() => QuestionCreateWithoutUserInput)
    create!: QuestionCreateWithoutUserInput;
}
