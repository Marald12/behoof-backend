import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutUserInput } from './article-create-without-user.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutUserInput } from './article-create-or-connect-without-user.input';
import { ArticleCreateManyUserInputEnvelope } from './article-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ArticleCreateWithoutUserInput], {nullable:true})
    @Type(() => ArticleCreateWithoutUserInput)
    create?: Array<ArticleCreateWithoutUserInput>;

    @Field(() => [ArticleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutUserInput>;

    @Field(() => ArticleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ArticleCreateManyUserInputEnvelope)
    createMany?: ArticleCreateManyUserInputEnvelope;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id'>>;
}
