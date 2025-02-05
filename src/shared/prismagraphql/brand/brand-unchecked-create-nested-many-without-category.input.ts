import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BrandCreateWithoutCategoryInput } from './brand-create-without-category.input';
import { Type } from 'class-transformer';
import { BrandCreateOrConnectWithoutCategoryInput } from './brand-create-or-connect-without-category.input';
import { BrandCreateManyCategoryInputEnvelope } from './brand-create-many-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BrandWhereUniqueInput } from './brand-where-unique.input';

@InputType()
export class BrandUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [BrandCreateWithoutCategoryInput], {nullable:true})
    @Type(() => BrandCreateWithoutCategoryInput)
    create?: Array<BrandCreateWithoutCategoryInput>;

    @Field(() => [BrandCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => BrandCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<BrandCreateOrConnectWithoutCategoryInput>;

    @Field(() => BrandCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => BrandCreateManyCategoryInputEnvelope)
    createMany?: BrandCreateManyCategoryInputEnvelope;

    @Field(() => [BrandWhereUniqueInput], {nullable:true})
    @Type(() => BrandWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BrandWhereUniqueInput, 'id'>>;
}
