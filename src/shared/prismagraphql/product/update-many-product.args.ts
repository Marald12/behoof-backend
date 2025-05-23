import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductUpdateManyMutationInput } from './product-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProductWhereInput } from './product-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProductArgs {

    @Field(() => ProductUpdateManyMutationInput, {nullable:false})
    @Type(() => ProductUpdateManyMutationInput)
    data!: ProductUpdateManyMutationInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
