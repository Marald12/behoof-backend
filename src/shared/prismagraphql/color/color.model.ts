import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { ColorCount } from './color-count.output';

@ObjectType()
export class Color {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    color!: string;

    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;

    @Field(() => ColorCount, {nullable:false})
    _count?: ColorCount;
}
