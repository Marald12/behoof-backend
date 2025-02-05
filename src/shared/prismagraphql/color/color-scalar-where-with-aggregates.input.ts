import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ColorScalarWhereWithAggregatesInput {

    @Field(() => [ColorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ColorScalarWhereWithAggregatesInput>;

    @Field(() => [ColorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ColorScalarWhereWithAggregatesInput>;

    @Field(() => [ColorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ColorScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    color?: StringWithAggregatesFilter;
}
