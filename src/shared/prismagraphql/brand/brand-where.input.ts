import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CategoryListRelationFilter } from '../category/category-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';

@InputType()
export class BrandWhereInput {

    @Field(() => [BrandWhereInput], {nullable:true})
    AND?: Array<BrandWhereInput>;

    @Field(() => [BrandWhereInput], {nullable:true})
    OR?: Array<BrandWhereInput>;

    @Field(() => [BrandWhereInput], {nullable:true})
    NOT?: Array<BrandWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CategoryListRelationFilter, {nullable:true})
    categories?: CategoryListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;
}
