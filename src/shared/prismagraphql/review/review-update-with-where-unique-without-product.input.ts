import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Type } from 'class-transformer';
import { ReviewUpdateWithoutProductInput } from './review-update-without-product.input';

@InputType()
export class ReviewUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ReviewWhereUniqueInput, {nullable:false})
    @Type(() => ReviewWhereUniqueInput)
    where!: Prisma.AtLeast<ReviewWhereUniqueInput, 'id'>;

    @Field(() => ReviewUpdateWithoutProductInput, {nullable:false})
    @Type(() => ReviewUpdateWithoutProductInput)
    data!: ReviewUpdateWithoutProductInput;
}
