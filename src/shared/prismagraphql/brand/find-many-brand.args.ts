import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';
import { Type } from 'class-transformer';
import { BrandOrderByWithRelationInput } from './brand-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BrandScalarFieldEnum } from './brand-scalar-field.enum';

@ArgsType()
export class FindManyBrandArgs {

    @Field(() => BrandWhereInput, {nullable:true})
    @Type(() => BrandWhereInput)
    where?: BrandWhereInput;

    @Field(() => [BrandOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BrandOrderByWithRelationInput>;

    @Field(() => BrandWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BrandScalarFieldEnum], {nullable:true})
    distinct?: Array<`${BrandScalarFieldEnum}`>;
}
