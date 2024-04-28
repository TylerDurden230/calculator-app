export enum ButtonType {
    DIGIT = 'digit',
    OPERATOR = 'operator',
    DEL = 'del',
    RESET = 'reset',
}

export type OperationValue = {
    value: string,
    isSet: boolean

}

export type Operator = "+" | "-" | "x" | "/" | "="