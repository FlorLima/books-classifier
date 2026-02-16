export type InputBookProps = {
    id: string;
    placeholder: string;
    type?: "search" | "password" | "text";
    variant?: "outlined" | "filled" | "standard";
    label: string;
    fullWidth?: boolean;
    required: boolean;
}
