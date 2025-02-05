import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorScalarWhereInput } from './color-scalar-where.input';
import { Type } from 'class-transformer';
import { ColorUpdateManyMutationInput } from './color-update-many-mutation.input';

@InputType()
export class ColorUpdateManyWithWhereWithoutProductsInput {

    @Field(() => ColorScalarWhereInput, {nullable:false})
    @Type(() => ColorScalarWhereInput)
    where!: ColorScalarWhereInput;

    @Field(() => ColorUpdateManyMutationInput, {nullable:false})
    @Type(() => ColorUpdateManyMutationInput)
    data!: ColorUpdateManyMutationInput;
}
