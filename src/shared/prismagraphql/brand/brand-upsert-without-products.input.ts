import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandUpdateWithoutProductsInput } from './brand-update-without-products.input';
import { Type } from 'class-transformer';
import { BrandCreateWithoutProductsInput } from './brand-create-without-products.input';
import { BrandWhereInput } from './brand-where.input';

@InputType()
export class BrandUpsertWithoutProductsInput {

    @Field(() => BrandUpdateWithoutProductsInput, {nullable:false})
    @Type(() => BrandUpdateWithoutProductsInput)
    update!: BrandUpdateWithoutProductsInput;

    @Field(() => BrandCreateWithoutProductsInput, {nullable:false})
    @Type(() => BrandCreateWithoutProductsInput)
    create!: BrandCreateWithoutProductsInput;

    @Field(() => BrandWhereInput, {nullable:true})
    @Type(() => BrandWhereInput)
    where?: BrandWhereInput;
}
