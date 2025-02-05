import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';
import { Type } from 'class-transformer';
import { BrandUpdateWithoutProductsInput } from './brand-update-without-products.input';

@InputType()
export class BrandUpdateToOneWithWhereWithoutProductsInput {

    @Field(() => BrandWhereInput, {nullable:true})
    @Type(() => BrandWhereInput)
    where?: BrandWhereInput;

    @Field(() => BrandUpdateWithoutProductsInput, {nullable:false})
    @Type(() => BrandUpdateWithoutProductsInput)
    data!: BrandUpdateWithoutProductsInput;
}
