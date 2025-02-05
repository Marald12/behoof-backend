import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutReviewsInput } from './product-create-without-reviews.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutReviewsInput } from './product-create-or-connect-without-reviews.input';
import { ProductUpsertWithoutReviewsInput } from './product-upsert-without-reviews.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutReviewsInput } from './product-update-to-one-with-where-without-reviews.input';

@InputType()
export class ProductUpdateOneRequiredWithoutReviewsNestedInput {

    @Field(() => ProductCreateWithoutReviewsInput, {nullable:true})
    @Type(() => ProductCreateWithoutReviewsInput)
    create?: ProductCreateWithoutReviewsInput;

    @Field(() => ProductCreateOrConnectWithoutReviewsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutReviewsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput;

    @Field(() => ProductUpsertWithoutReviewsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutReviewsInput)
    upsert?: ProductUpsertWithoutReviewsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutReviewsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutReviewsInput)
    update?: ProductUpdateToOneWithWhereWithoutReviewsInput;
}
