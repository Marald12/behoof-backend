import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateManyCategoryInput } from './brand-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class BrandCreateManyCategoryInputEnvelope {

    @Field(() => [BrandCreateManyCategoryInput], {nullable:false})
    @Type(() => BrandCreateManyCategoryInput)
    data!: Array<BrandCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
