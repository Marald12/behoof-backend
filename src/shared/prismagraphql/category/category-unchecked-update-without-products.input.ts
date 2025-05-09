import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BrandUncheckedUpdateManyWithoutCategoriesNestedInput } from '../brand/brand-unchecked-update-many-without-categories-nested.input';
import { ArticleUncheckedUpdateManyWithoutCategoryNestedInput } from '../article/article-unchecked-update-many-without-category-nested.input';

@InputType()
export class CategoryUncheckedUpdateWithoutProductsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    banner?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BrandUncheckedUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    brands?: BrandUncheckedUpdateManyWithoutCategoriesNestedInput;

    @Field(() => ArticleUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    articles?: ArticleUncheckedUpdateManyWithoutCategoryNestedInput;
}
