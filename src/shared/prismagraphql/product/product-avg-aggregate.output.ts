import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProductAvgAggregate {

    @Field(() => Float, {nullable:true})
    rating?: number;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => Float, {nullable:true})
    viewsCount?: number;
}
