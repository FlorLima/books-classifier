import type { FormBookProps } from "../types/FormBookProps";

export const bookFormConfig : FormBookProps = {
    id: 'book-form-settings',
    inputs: [
        {
            id: 'title',
            placeholder: 'Enter book title',
            type: 'text',
            variant: 'outlined',
            label: 'Title',
            required: true,
            fullWidth: true
        },
        {
            id: 'author',
            placeholder: 'Enter book author',
            type: 'text',
            variant: 'outlined',
            label: 'Author',
            required: true,
            fullWidth: true
        },
        {
            id: 'isbn',
            placeholder: 'Enter book ISBN',
            type: 'text',
            variant: 'outlined',
            label: 'ISBN',
            required: true,
            fullWidth: true
        },
        {
            id: 'description',
            placeholder: 'Enter book description',
            type: 'text',
            variant: 'outlined',
            label: 'Description',
            required: false,
            fullWidth: true
        }
    ],
    submitBtn: {
        id: 'submit-book',
        label: 'Submit',
        style: 'contained',
        color: 'primary',
        
    },
    cancelBtn: {
        id: 'cancel-book',
        label: 'Cancel',
        style: 'outlined',
        color: 'primary', 
    },
    resetBtn: {
        id: 'reset-form-book',
        label: 'Reset',
        style: 'outlined',
        color: 'primary',
    }
}