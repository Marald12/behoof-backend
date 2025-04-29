import { registerEnumType } from '@nestjs/graphql';

export enum ColorScalarFieldEnum {
    id = "id",
    color = "color",
    title = "title"
}


registerEnumType(ColorScalarFieldEnum, { name: 'ColorScalarFieldEnum', description: undefined })
