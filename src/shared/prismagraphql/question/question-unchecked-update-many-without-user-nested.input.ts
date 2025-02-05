import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutUserInput } from './question-create-without-user.input';
import { Type } from 'class-transformer';
import { QuestionCreateOrConnectWithoutUserInput } from './question-create-or-connect-without-user.input';
import { QuestionUpsertWithWhereUniqueWithoutUserInput } from './question-upsert-with-where-unique-without-user.input';
import { QuestionCreateManyUserInputEnvelope } from './question-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { QuestionWhereUniqueInput } from './question-where-unique.input';
import { QuestionUpdateWithWhereUniqueWithoutUserInput } from './question-update-with-where-unique-without-user.input';
import { QuestionUpdateManyWithWhereWithoutUserInput } from './question-update-many-with-where-without-user.input';
import { QuestionScalarWhereInput } from './question-scalar-where.input';

@InputType()
export class QuestionUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [QuestionCreateWithoutUserInput], {nullable:true})
    @Type(() => QuestionCreateWithoutUserInput)
    create?: Array<QuestionCreateWithoutUserInput>;

    @Field(() => [QuestionCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => QuestionCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<QuestionCreateOrConnectWithoutUserInput>;

    @Field(() => [QuestionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => QuestionUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<QuestionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => QuestionCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => QuestionCreateManyUserInputEnvelope)
    createMany?: QuestionCreateManyUserInputEnvelope;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionWhereUniqueInput], {nullable:true})
    @Type(() => QuestionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<QuestionWhereUniqueInput, 'id'>>;

    @Field(() => [QuestionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => QuestionUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<QuestionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [QuestionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => QuestionUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<QuestionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [QuestionScalarWhereInput], {nullable:true})
    @Type(() => QuestionScalarWhereInput)
    deleteMany?: Array<QuestionScalarWhereInput>;
}
