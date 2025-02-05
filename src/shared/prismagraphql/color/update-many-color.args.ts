import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColorUpdateManyMutationInput } from './color-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ColorWhereInput } from './color-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyColorArgs {

    @Field(() => ColorUpdateManyMutationInput, {nullable:false})
    @Type(() => ColorUpdateManyMutationInput)
    data!: ColorUpdateManyMutationInput;

    @Field(() => ColorWhereInput, {nullable:true})
    @Type(() => ColorWhereInput)
    where?: ColorWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
