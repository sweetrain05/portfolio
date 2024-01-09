import { useMemo } from 'react';
import classNames from 'classnames';
import './TextInput.scss';

export enum TextInputType {
    TEXT = 'text',
    TEXTAREA = 'textarea',
    EMAIL = 'email',
    PASSWORD = 'password',
}

type TextInputProps = {
    type?: TextInputType;
    icon?: React.ComponentType<React.SVGAttributes<SVGElement>>;
    label?: string;
    className?: string;
    disabled?: boolean;
    errorText?: string;
    [key: string]: any;
};

const TextInput: React.FC<TextInputProps> = ({
    type = TextInputType.TEXT,
    icon: Icon,
    label,
    className = '',
    disabled = false,
    errorText,
    ...rest
}) => {
    const inputClasses = useMemo(
        () =>
            classNames(
                'text-input',
                {
                    'text-input--include-error': errorText,
                },
                className
            ),
        [errorText, className]
    );

    const inputFieldClasses = useMemo(
        () =>
            classNames(
                'text-input__field',
                {
                    'text-input__field--textarea':
                        type === TextInputType.TEXTAREA,
                },
                { 'text-input__field--error': errorText },
                {
                    'text-input__field--disabled': disabled,
                },

                { 'text-input__field--no-icon': !Icon }
            ),
        [errorText, disabled, Icon, type]
    );

    return (
        <div className={inputClasses}>
            {label && Icon && (
                <div className='text-input__label'>
                    <Icon />
                    <label htmlFor={label}>{label}</label>
                </div>
            )}

            {type === TextInputType.TEXTAREA ? (
                <textarea
                    id={label}
                    name={label}
                    className={inputFieldClasses}
                    disabled={disabled}
                    {...rest}
                />
            ) : (
                <input
                    id={label}
                    name={label}
                    className={inputFieldClasses}
                    type={type}
                    disabled={disabled}
                    {...rest}
                />
            )}

            {errorText && (
                <div className='text-input__error-text'>{errorText}</div>
            )}
        </div>
    );
};

export default TextInput;
