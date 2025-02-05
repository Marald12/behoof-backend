import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutReviewsInput } from '../product/product-create-nested-one-without-reviews.input';

@InputType()
export class ReviewCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Int, {nullable:false})
    starsCount!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutReviewsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutReviewsInput;
}
