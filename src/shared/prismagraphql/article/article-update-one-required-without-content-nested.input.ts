import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutContentInput } from './article-create-without-content.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutContentInput } from './article-create-or-connect-without-content.input';
import { ArticleUpsertWithoutContentInput } from './article-upsert-without-content.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateToOneWithWhereWithoutContentInput } from './article-update-to-one-with-where-without-content.input';

@InputType()
export class ArticleUpdateOneRequiredWithoutContentNestedInput {

    @Field(() => ArticleCreateWithoutContentInput, {nullable:true})
    @Type(() => ArticleCreateWithoutContentInput)
    create?: ArticleCreateWithoutContentInput;

    @Field(() => ArticleCreateOrConnectWithoutContentInput, {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutContentInput)
    connectOrCreate?: ArticleCreateOrConnectWithoutContentInput;

    @Field(() => ArticleUpsertWithoutContentInput, {nullable:true})
    @Type(() => ArticleUpsertWithoutContentInput)
    upsert?: ArticleUpsertWithoutContentInput;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id'>;

    @Field(() => ArticleUpdateToOneWithWhereWithoutContentInput, {nullable:true})
    @Type(() => ArticleUpdateToOneWithWhereWithoutContentInput)
    update?: ArticleUpdateToOneWithWhereWithoutContentInput;
}
