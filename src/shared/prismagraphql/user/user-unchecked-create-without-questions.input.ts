import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewUncheckedCreateNestedManyWithoutUserInput } from '../review/review-unchecked-create-nested-many-without-user.input';
import { ProductUncheckedCreateNestedManyWithoutUsersFavoriteInput } from '../product/product-unchecked-create-nested-many-without-users-favorite.input';

@InputType()
export class UserUncheckedCreateWithoutQuestionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    country?: string;

    @Field(() => String, {nullable:true})
    city?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutUsersFavoriteInput, {nullable:true})
    favoriteProducts?: ProductUncheckedCreateNestedManyWithoutUsersFavoriteInput;
}
