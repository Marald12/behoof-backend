import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutUserInput } from './article-update-without-user.input';
import { ArticleCreateWithoutUserInput } from './article-create-without-user.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id'>;

    @Field(() => ArticleUpdateWithoutUserInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutUserInput)
    update!: ArticleUpdateWithoutUserInput;

    @Field(() => ArticleCreateWithoutUserInput, {nullable:false})
    @Type(() => ArticleCreateWithoutUserInput)
    create!: ArticleCreateWithoutUserInput;
}
