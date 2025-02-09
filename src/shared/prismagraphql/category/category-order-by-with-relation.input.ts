import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { BrandOrderByRelationAggregateInput } from '../brand/brand-order-by-relation-aggregate.input';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';

@InputType()
export class CategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    banner?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;

    @Field(() => BrandOrderByRelationAggregateInput, {nullable:true})
    brands?: BrandOrderByRelationAggregateInput;

    @Field(() => ArticleOrderByRelationAggregateInput, {nullable:true})
    articles?: ArticleOrderByRelationAggregateInput;
}
