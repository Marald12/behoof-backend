import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBrandOrThrowArgs {

    @Field(() => BrandWhereUniqueInput, {nullable:false})
    @Type(() => BrandWhereUniqueInput)
    where!: Prisma.AtLeast<BrandWhereUniqueInput, 'id'>;
}
