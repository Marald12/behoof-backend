import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutReviewsInput } from './product-create-without-reviews.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutReviewsInput } from './product-create-or-connect-without-reviews.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutReviewsInput {

    @Field(() => ProductCreateWithoutReviewsInput, {nullable:true})
    @Type(() => ProductCreateWithoutReviewsInput)
    create?: ProductCreateWithoutReviewsInput;

    @Field(() => ProductCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
