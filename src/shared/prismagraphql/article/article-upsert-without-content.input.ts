import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleUpdateWithoutContentInput } from './article-update-without-content.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutContentInput } from './article-create-without-content.input';
import { ArticleWhereInput } from './article-where.input';

@InputType()
export class ArticleUpsertWithoutContentInput {

    @Field(() => ArticleUpdateWithoutContentInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutContentInput)
    update!: ArticleUpdateWithoutContentInput;

    @Field(() => ArticleCreateWithoutContentInput, {nullable:false})
    @Type(() => ArticleCreateWithoutContentInput)
    create!: ArticleCreateWithoutContentInput;

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;
}
