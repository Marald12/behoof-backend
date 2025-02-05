import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateManyBrandInput } from './product-create-many-brand.input';
import { Type } from 'class-transformer';

@InputType()
export class ProductCreateManyBrandInputEnvelope {

    @Field(() => [ProductCreateManyBrandInput], {nullable:false})
    @Type(() => ProductCreateManyBrandInput)
    data!: Array<ProductCreateManyBrandInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
