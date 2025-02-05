import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateWithoutProductInput } from './review-create-without-product.input';
import { Type } from 'class-transformer';
import { ReviewCreateOrConnectWithoutProductInput } from './review-create-or-connect-without-product.input';
import { ReviewUpsertWithWhereUniqueWithoutProductInput } from './review-upsert-with-where-unique-without-product.input';
import { ReviewCreateManyProductInputEnvelope } from './review-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { ReviewUpdateWithWhereUniqueWithoutProductInput } from './review-update-with-where-unique-without-product.input';
import { ReviewUpdateManyWithWhereWithoutProductInput } from './review-update-many-with-where-without-product.input';
import { ReviewScalarWhereInput } from './review-scalar-where.input';

@InputType()
export class ReviewUpdateManyWithoutProductNestedInput {

    @Field(() => [ReviewCreateWithoutProductInput], {nullable:true})
    @Type(() => ReviewCreateWithoutProductInput)
    create?: Array<ReviewCreateWithoutProductInput>;

    @Field(() => [ReviewCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ReviewCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ReviewCreateOrConnectWithoutProductInput>;

    @Field(() => [ReviewUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ReviewUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ReviewUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ReviewCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ReviewCreateManyProductInputEnvelope)
    createMany?: ReviewCreateManyProductInputEnvelope;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewWhereUniqueInput], {nullable:true})
    @Type(() => ReviewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>>;

    @Field(() => [ReviewUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ReviewUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ReviewUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ReviewUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ReviewUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ReviewUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    @Type(() => ReviewScalarWhereInput)
    deleteMany?: Array<ReviewScalarWhereInput>;
}
