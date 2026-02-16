import { Box, Stack, Typography, Divider } from "@mui/material";
import type { FormBookProps } from "../types/FormBookProps";
import InputBook from "./InputBook";
import ButtonBook from "./ButtonBook";

export default function FormBook({ id, inputs, submitBtn, cancelBtn, resetBtn }: FormBookProps) {
    return (
        <Box
            component="form"
            id={id}
            autoComplete="off"
            sx={{
                maxWidth: 1000,
                width: '100%',
                mx: "auto",
                mt: 4,
                p: 4,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Typography variant="h5" component="h2" sx={{ mb: 3, textAlign: "center" }}>
                Add Book
            </Typography>

            <Divider sx={{ mb: 3 }} />

            {/* Inputs */}
            <Stack spacing={2} sx={{ mb: 4 }}>
                {inputs.map((input) => (
                    <InputBook
                        key={input.id}
                        id={input.id}
                        placeholder={input.placeholder}
                        type={input.type}
                        variant={input.variant}
                        fullWidth={input.fullWidth}
                        required={input.required}
                        label={input.label}
                    />
                ))}
            </Stack>

            {/* Buttons */}
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <ButtonBook
                    id={resetBtn.id}
                    label={resetBtn.label}
                    style={resetBtn.style}
                    color={resetBtn.color}
                />
                <Stack direction="row" spacing={2}>
                    <ButtonBook
                        id={cancelBtn.id}
                        label={cancelBtn.label}
                        style={cancelBtn.style}
                        color={cancelBtn.color}
                    />
                    <ButtonBook
                        id={submitBtn.id}
                        label={submitBtn.label}
                        style={submitBtn.style}
                        color={submitBtn.color}
                    />
                </Stack>
            </Stack>
        </Box>
    );
}