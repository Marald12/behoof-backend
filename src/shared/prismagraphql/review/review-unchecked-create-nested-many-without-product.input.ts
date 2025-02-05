import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutProductInput } from './review-create-without-product.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutProductInput } from './review-create-or-connect-without-product.input';
import { ReviewCreateManyProductInputEnvelope } from './review-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';

@InputType()
export class ReviewUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [ReviewCreateWithoutProductInput], {nullable:true})
    @Type(() => ReviewCreateWithoutProductInput)
    create?: Array<ReviewCreateWithoutProductInput>;

    @Field(() => [ReviewCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutProductInput>;

    @Field(() => ReviewCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyProductInputEnvelope)
    createMany?: ReviewCreateManyProductInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;
}
