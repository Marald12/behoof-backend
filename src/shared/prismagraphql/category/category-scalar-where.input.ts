import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CategoryScalarWhereInput {

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    AND?: Array<CategoryScalarWhereInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    OR?: Array<CategoryScalarWhereInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    banner?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
