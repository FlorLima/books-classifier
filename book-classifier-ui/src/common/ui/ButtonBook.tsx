import  { Button } from "@mui/material";
import type { ButtonBookProps } from "../types/ButtonBookProps";

export default function ButtonBook({label = "SUBMIT", style = "contained", color = "secondary"}:    ButtonBookProps) {
    return(
        <Button variant={style}  color={color}>
            {label}
        </Button>
    );
}