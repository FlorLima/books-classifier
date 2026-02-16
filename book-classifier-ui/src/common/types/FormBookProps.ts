import type { ButtonBookProps } from "./ButtonBookProps";
import type { InputBookProps } from "./InputBookProps";

export interface FormBookProps {
    id: string;
    inputs : InputBookProps[];
    submitBtn: ButtonBookProps;
    cancelBtn: ButtonBookProps;
    resetBtn: ButtonBookProps;
}
    