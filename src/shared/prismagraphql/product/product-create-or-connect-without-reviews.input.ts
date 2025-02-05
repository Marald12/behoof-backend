import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutReviewsInput } from './product-create-without-reviews.input';

@InputType()
export class ProductCreateOrConnectWithoutReviewsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutReviewsInput, {nullable:false})
    @Type(() => ProductCreateWithoutReviewsInput)
    create!: ProductCreateWithoutReviewsInput;
}
