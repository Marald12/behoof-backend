import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { ArticleUpdateWithoutContentInput } from './article-update-without-content.input';

@InputType()
export class ArticleUpdateToOneWithWhereWithoutContentInput {

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;

    @Field(() => ArticleUpdateWithoutContentInput, {nullable:false})
    @Type(() => ArticleUpdateWithoutContentInput)
    data!: ArticleUpdateWithoutContentInput;
}
