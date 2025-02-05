import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';
import { Type } from 'class-transformer';
import { ColorCreateInput } from './color-create.input';
import { ColorUpdateInput } from './color-update.input';

@ArgsType()
export class UpsertOneColorArgs {

    @Field(() => ColorWhereUniqueInput, {nullable:false})
    @Type(() => ColorWhereUniqueInput)
    where!: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;

    @Field(() => ColorCreateInput, {nullable:false})
    @Type(() => ColorCreateInput)
    create!: ColorCreateInput;

    @Field(() => ColorUpdateInput, {nullable:false})
    @Type(() => ColorUpdateInput)
    update!: ColorUpdateInput;
}
