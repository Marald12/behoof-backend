import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueColorOrThrowArgs {

    @Field(() => ColorWhereUniqueInput, {nullable:false})
    @Type(() => ColorWhereUniqueInput)
    where!: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;
}
