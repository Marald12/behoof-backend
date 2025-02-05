import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutReviewsInput } from './product-update-without-reviews.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutReviewsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutReviewsInput)
    data!: ProductUpdateWithoutReviewsInput;
}
