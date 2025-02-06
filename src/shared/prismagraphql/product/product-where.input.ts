import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ColorListRelationFilter } from '../color/color-list-relation-filter.input';
import { BrandScalarRelationFilter } from '../brand/brand-scalar-relation-filter.input';
import { CategoryScalarRelationFilter } from '../category/category-scalar-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class ProductWhereInput {

    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rating?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;

    @Field(() => JsonFilter, {nullable:true})
    characteristics?: JsonFilter;

    @Field(() => StringFilter, {nullable:true})
    brandId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    categoryId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    viewsCount?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ColorListRelationFilter, {nullable:true})
    colors?: ColorListRelationFilter;

    @Field(() => BrandScalarRelationFilter, {nullable:true})
    brand?: BrandScalarRelationFilter;

    @Field(() => CategoryScalarRelationFilter, {nullable:true})
    category?: CategoryScalarRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    usersFavorite?: UserListRelationFilter;
}
