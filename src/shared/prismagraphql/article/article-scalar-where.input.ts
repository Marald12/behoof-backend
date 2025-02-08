import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ArticleScalarWhereInput {

    @Field(() => [ArticleScalarWhereInput], {nullable:true})
    AND?: Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {nullable:true})
    OR?: Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleScalarWhereInput], {nullable:true})
    NOT?: Array<ArticleScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    tags?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    banner?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    viewsCount?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
