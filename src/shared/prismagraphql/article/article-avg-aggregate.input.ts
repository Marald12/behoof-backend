import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ArticleAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    viewsCount?: true;
}
