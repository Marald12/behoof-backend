import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutBrandsInput } from './category-update-without-brands.input';

@InputType()
export class CategoryUpdateToOneWithWhereWithoutBrandsInput {

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;

    @Field(() => CategoryUpdateWithoutBrandsInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutBrandsInput)
    data!: CategoryUpdateWithoutBrandsInput;
}
