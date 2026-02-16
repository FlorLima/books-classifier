import { TextField } from "@mui/material";
import type { InputBookProps } from "../types/InputBookProps";

export default function InputBook({ placeholder, type = "text", label, fullWidth = true, variant = "outlined", required = true  }: InputBookProps) {

    return (
        <TextField
        type={type}
        label={label}
        placeholder={placeholder}
        fullWidth={fullWidth}
        variant={variant}
        required={required}
        />
    )
};