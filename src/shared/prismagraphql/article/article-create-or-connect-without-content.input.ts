import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutContentInput } from './article-create-without-content.input';

@InputType()
export class ArticleCreateOrConnectWithoutContentInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id'>;

    @Field(() => ArticleCreateWithoutContentInput, {nullable:false})
    @Type(() => ArticleCreateWithoutContentInput)
    create!: ArticleCreateWithoutContentInput;
}
