import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCreateManyProductInput } from './review-create-many-product.input';
import { Type } from 'class-transformer';

@InputType()
export class ReviewCreateManyProductInputEnvelope {

    @Field(() => [ReviewCreateManyProductInput], {nullable:false})
    @Type(() => ReviewCreateManyProductInput)
    data!: Array<ReviewCreateManyProductInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
