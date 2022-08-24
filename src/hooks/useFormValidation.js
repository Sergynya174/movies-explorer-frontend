import { useCallback, useState } from 'react';
import isEmail from "validator/es/lib/isEmail";

export function useFormWithValidation() {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (evt) => {
        const input = evt.target;
        const name = input.name;
        const value = input.value;

        if (name === "email") {
            if (!isEmail(value)) {
              evt.target.setCustomValidity("Некорректый E-mail");
            } else {
              evt.target.setCustomValidity("");
            }
        }

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: input.validationMessage });
        setIsValid(input.closest('form').checkValidity());
    }

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid)
    }, [setValues, setErrors, setIsValid]);

    return { values, errors, isValid, handleChange, resetForm, setValues, setIsValid, setErrors };
}