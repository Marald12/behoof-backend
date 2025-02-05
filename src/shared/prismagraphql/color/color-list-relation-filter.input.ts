import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorWhereInput } from './color-where.input';

@InputType()
export class ColorListRelationFilter {

    @Field(() => ColorWhereInput, {nullable:true})
    every?: ColorWhereInput;

    @Field(() => ColorWhereInput, {nullable:true})
    some?: ColorWhereInput;

    @Field(() => ColorWhereInput, {nullable:true})
    none?: ColorWhereInput;
}
