import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensType } from '../prisma/tokens-type.enum';

@InputType()
export class TokenCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => TokensType, {nullable:false})
    type!: `${TokensType}`;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
