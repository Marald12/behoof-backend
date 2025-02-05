import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutBrandsInput } from './category-update-without-brands.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutBrandsInput } from './category-create-without-brands.input';
import { CategoryWhereInput } from './category-where.input';

@InputType()
export class CategoryUpsertWithoutBrandsInput {

    @Field(() => CategoryUpdateWithoutBrandsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutBrandsInput)
    update!: CategoryUpdateWithoutBrandsInput;

    @Field(() => CategoryCreateWithoutBrandsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutBrandsInput)
    create!: CategoryCreateWithoutBrandsInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
