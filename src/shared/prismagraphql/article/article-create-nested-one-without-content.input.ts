import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutContentInput } from './article-create-without-content.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutContentInput } from './article-create-or-connect-without-content.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedOneWithoutContentInput {

    @Field(() => ArticleCreateWithoutContentInput, {nullable:true})
    @Type(() => ArticleCreateWithoutContentInput)
    create?: ArticleCreateWithoutContentInput;

    @Field(() => ArticleCreateOrConnectWithoutContentInput, {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutContentInput)
    connectOrCreate?: ArticleCreateOrConnectWithoutContentInput;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id'>;
}
