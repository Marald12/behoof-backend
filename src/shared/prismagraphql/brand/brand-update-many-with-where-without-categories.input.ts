import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandScalarWhereInput } from './brand-scalar-where.input';
import { Type } from 'class-transformer';
import { BrandUpdateManyMutationInput } from './brand-update-many-mutation.input';

@InputType()
export class BrandUpdateManyWithWhereWithoutCategoriesInput {

    @Field(() => BrandScalarWhereInput, {nullable:false})
    @Type(() => BrandScalarWhereInput)
    where!: BrandScalarWhereInput;

    @Field(() => BrandUpdateManyMutationInput, {nullable:false})
    @Type(() => BrandUpdateManyMutationInput)
    data!: BrandUpdateManyMutationInput;
}
