import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutCategoriesInput } from './brand-create-without-categories.input';
import { Type } from 'class-transformer';
import { BrandCreateOrConnectWithoutCategoriesInput } from './brand-create-or-connect-without-categories.input';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';

@InputType()
export class BrandUncheckedCreateNestedManyWithoutCategoriesInput {

    @Field(() => [BrandCreateWithoutCategoriesInput], {nullable:true})
    @Type(() => BrandCreateWithoutCategoriesInput)
    create?: Array<BrandCreateWithoutCategoriesInput>;

    @Field(() => [BrandCreateOrConnectWithoutCategoriesInput], {nullable:true})
    @Type(() => BrandCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: Array<BrandCreateOrConnectWithoutCategoriesInput>;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BrandWhereUniqueInput, 'id'>>;
}
