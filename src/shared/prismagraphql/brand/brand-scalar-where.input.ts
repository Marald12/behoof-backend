import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BrandScalarWhereInput {

    @Field(() => [BrandScalarWhereInput], {nullable:true})
    AND?: Array<BrandScalarWhereInput>;

    @Field(() => [BrandScalarWhereInput], {nullable:true})
    OR?: Array<BrandScalarWhereInput>;

    @Field(() => [BrandScalarWhereInput], {nullable:true})
    NOT?: Array<BrandScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
