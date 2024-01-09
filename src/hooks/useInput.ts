import { useState } from 'react';
import useTextInputValidate, { ValidationType } from './useInputValidate';

const useInput = (defaultValue, inputType: ValidationType) => {
    const validate = useTextInputValidate();

    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const { isValid, message } = validate({
        type: inputType,
        value: enteredValue,
    });

    const handleInputChange = (e) => {
        setEnteredValue(e.target.value);
        setDidEdit(false);
    };

    const handleInputBlur = () => {
        setDidEdit(true);
    };

    const handleReset = () => {
        setEnteredValue(defaultValue);
        setDidEdit(false);
    };

    return {
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        handleReset,
        hasError: didEdit && !isValid,
        error: message,
    };
};

export default useInput;
