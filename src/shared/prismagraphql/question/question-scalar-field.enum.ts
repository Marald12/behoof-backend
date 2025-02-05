import { registerEnumType } from '@nestjs/graphql';

export enum QuestionScalarFieldEnum {
    id = "id",
    userId = "userId",
    question = "question",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(QuestionScalarFieldEnum, { name: 'QuestionScalarFieldEnum', description: undefined })
