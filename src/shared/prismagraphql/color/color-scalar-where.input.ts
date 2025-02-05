import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ColorScalarWhereInput {

    @Field(() => [ColorScalarWhereInput], {nullable:true})
    AND?: Array<ColorScalarWhereInput>;

    @Field(() => [ColorScalarWhereInput], {nullable:true})
    OR?: Array<ColorScalarWhereInput>;

    @Field(() => [ColorScalarWhereInput], {nullable:true})
    NOT?: Array<ColorScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    color?: StringFilter;
}
