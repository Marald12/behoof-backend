import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutProductInput } from './review-update-without-product.input';
import { ReviewCreateWithoutProductInput } from './review-create-without-product.input';

@InputType()
export class ReviewUpsertWithWhereUniqueWithoutProductInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutProductInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutProductInput)
    update!: ReviewUpdateWithoutProductInput;

    @Field(() => ReviewCreateWithoutProductInput, {nullable:false})
    @Type(() => ReviewCreateWithoutProductInput)
    create!: ReviewCreateWithoutProductInput;
}
