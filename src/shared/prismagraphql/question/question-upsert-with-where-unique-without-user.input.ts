import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { Type } from 'class-transformer';
import { QuestionUpdateWithoutUserInput } from './question-update-without-user.input';
import { QuestionCreateWithoutUserInput } from './question-create-without-user.input';

@InputType()
export class QuestionUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => QuestionWhereUniqueInput, {nullable:false})
    @Type(() => QuestionWhereUniqueInput)
    where!: Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>;

    @Field(() => QuestionUpdateWithoutUserInput, {nullable:false})
    @Type(() => QuestionUpdateWithoutUserInput)
    update!: QuestionUpdateWithoutUserInput;

    @Field(() => QuestionCreateWithoutUserInput, {nullable:false})
    @Type(() => QuestionCreateWithoutUserInput)
    create!: QuestionCreateWithoutUserInput;
}
