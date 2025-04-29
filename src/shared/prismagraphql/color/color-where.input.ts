import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class ColorWhereInput {

    @Field(() => [ColorWhereInput], {nullable:true})
    AND?: Array<ColorWhereInput>;

    @Field(() => [ColorWhereInput], {nullable:true})
    OR?: Array<ColorWhereInput>;

    @Field(() => [ColorWhereInput], {nullable:true})
    NOT?: Array<ColorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    color?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}
