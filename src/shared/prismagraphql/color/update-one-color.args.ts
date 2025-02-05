import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColorUpdateInput } from './color-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';

@ArgsType()
export class UpdateOneColorArgs {

    @Field(() => ColorUpdateInput, {nullable:false})
    @Type(() => ColorUpdateInput)
    data!: ColorUpdateInput;

    @Field(() => ColorWhereUniqueInput, {nullable:false})
    @Type(() => ColorWhereUniqueInput)
    where!: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;
}
