import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateManyUserInput } from './question-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class QuestionCreateManyUserInputEnvelope {

    @Field(() => [QuestionCreateManyUserInput], {nullable:false})
    @Type(() => QuestionCreateManyUserInput)
    data!: Array<QuestionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
