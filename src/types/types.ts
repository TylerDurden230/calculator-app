export enum ButtonType {
    DIGIT = 'digit',
    OPERATOR = 'operator',
    DEL = 'del',
    RESET = 'reset',
}

export type OperationValue = {
    value: string | number,
    isSet: boolean

}

export type Operator = "+" | "-" | "x" | "/" | "="