import { registerEnumType } from '@nestjs/graphql';

export enum TokenScalarFieldEnum {
    id = "id",
    token = "token",
    type = "type",
    email = "email",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(TokenScalarFieldEnum, { name: 'TokenScalarFieldEnum', description: undefined })
