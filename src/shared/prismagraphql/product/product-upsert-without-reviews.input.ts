import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutReviewsInput } from './product-update-without-reviews.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutReviewsInput } from './product-create-without-reviews.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutReviewsInput {

    @Field(() => ProductUpdateWithoutReviewsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutReviewsInput)
    update!: ProductUpdateWithoutReviewsInput;

    @Field(() => ProductCreateWithoutReviewsInput, {nullable:false})
    @Type(() => ProductCreateWithoutReviewsInput)
    create!: ProductCreateWithoutReviewsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
