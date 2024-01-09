const emailVerifyRegex =
    /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.(com|edu|org|net|gov)$/i;

export enum ValidationType {
    EMAIL = 'your email',
    NAME = 'your name',
    SUBJECT = 'a subject',
    MESSAGE = 'a message',
}

interface ValidationInput {
    type: ValidationType;
    value: string;
}

const useTextInputValidate =
    () =>
    (input: ValidationInput): { isValid: boolean; message: string } => {
        const { type, value } = input;

        if (!value) return { isValid: false, message: `Please enter ${type}.` };

        let trimmedValue = value.trim();

        switch (type) {
            case ValidationType.EMAIL:
                if (!emailVerifyRegex.test(trimmedValue))
                    return {
                        isValid: false,
                        message: 'Please enter an email with valid format.',
                    };
                break;
            case ValidationType.NAME:
                if (trimmedValue.length < 2)
                    return {
                        isValid: false,
                        message:
                            'Please enter a name longer than 2 characters long.',
                    };
                break;
            case ValidationType.SUBJECT:
                if (trimmedValue.length < 2)
                    return {
                        isValid: false,
                        message:
                            'Please enter a subject longer than 2 characters long.',
                    };
                break;
            case ValidationType.MESSAGE:
                if (trimmedValue.length < 10)
                    return {
                        isValid: false,
                        message:
                            'Please enter a message longer than 10 characters long.',
                    };
                break;
        }
        return { isValid: true, message: '' };
    };

export default useTextInputValidate;
