import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutUserInput } from './article-create-without-user.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutUserInput } from './article-create-or-connect-without-user.input';
import { ArticleUpsertWithWhereUniqueWithoutUserInput } from './article-upsert-with-where-unique-without-user.input';
import { ArticleCreateManyUserInputEnvelope } from './article-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithWhereUniqueWithoutUserInput } from './article-update-with-where-unique-without-user.input';
import { ArticleUpdateManyWithWhereWithoutUserInput } from './article-update-many-with-where-without-user.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';

@InputType()
export class ArticleUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [ArticleCreateWithoutUserInput], {nullable:true})
    @Type(() => ArticleCreateWithoutUserInput)
    create?: Array<ArticleCreateWithoutUserInput>;

    @Field(() => [ArticleCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutUserInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ArticleUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ArticleCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => ArticleCreateManyUserInputEnvelope)
    createMany?: ArticleCreateManyUserInputEnvelope;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleWhereUniqueInput], {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ArticleWhereUniqueInput, 'id'>>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => ArticleUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<ArticleUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => ArticleUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<ArticleUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ArticleScalarWhereInput], {nullable:true})
    @Type(() => ArticleScalarWhereInput)
    deleteMany?: Array<ArticleScalarWhereInput>;
}
