import { registerEnumType } from '@nestjs/graphql';

export enum TokensType {
    PASSWORD = "PASSWORD",
    REGISTER = "REGISTER"
}


registerEnumType(TokensType, { name: 'TokensType', description: undefined })
