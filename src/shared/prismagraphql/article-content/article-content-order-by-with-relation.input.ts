import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleOrderByWithRelationInput } from '../article/article-order-by-with-relation.input';

@InputType()
export class ArticleContentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    types?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    articleId?: `${SortOrder}`;

    @Field(() => ArticleOrderByWithRelationInput, {nullable:true})
    article?: ArticleOrderByWithRelationInput;
}
