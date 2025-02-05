import { registerEnumType } from '@nestjs/graphql';

export enum ColorScalarFieldEnum {
    id = "id",
    color = "color"
}


registerEnumType(ColorScalarFieldEnum, { name: 'ColorScalarFieldEnum', description: undefined })
