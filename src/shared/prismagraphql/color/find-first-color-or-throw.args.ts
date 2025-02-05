import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColorWhereInput } from './color-where.input';
import { Type } from 'class-transformer';
import { ColorOrderByWithRelationInput } from './color-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ColorScalarFieldEnum } from './color-scalar-field.enum';

@ArgsType()
export class FindFirstColorOrThrowArgs {

    @Field(() => ColorWhereInput, {nullable:true})
    @Type(() => ColorWhereInput)
    where?: ColorWhereInput;

    @Field(() => [ColorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ColorOrderByWithRelationInput>;

    @Field(() => ColorWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ColorScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ColorScalarFieldEnum}`>;
}
