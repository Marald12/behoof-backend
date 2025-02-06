import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ColorOrderByRelationAggregateInput } from '../color/color-order-by-relation-aggregate.input';
import { BrandOrderByWithRelationInput } from '../brand/brand-order-by-with-relation.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rating?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    characteristics?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    brandId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    viewsCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ColorOrderByRelationAggregateInput, {nullable:true})
    colors?: ColorOrderByRelationAggregateInput;

    @Field(() => BrandOrderByWithRelationInput, {nullable:true})
    brand?: BrandOrderByWithRelationInput;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: CategoryOrderByWithRelationInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    usersFavorite?: UserOrderByRelationAggregateInput;
}
