import {bindInput, cs, State} from "cs-react";

export const PasswordInput = ({next, value, type, className, placeholder}) => cs(
    ['input', (_, next) => State({initValue: value, next})],
    ['error', (_, next) => State({initValue: null, next})],
    ({input, error}) => {
        // const error = input.value?.length > 8 ? null : "Password must be at least 8 characters";
        return next({
            render: ({showErrors} = {}) =>
                (<>
                    <input {...{
                        className,
                        type,
                        ...bindInput(input),
                        placeholder
                    }} />
                    {showErrors && error && (
                        <p className="text-red-600">
                            {error}
                        </p>
                    )}
                </>),
            value: input.value,
            invalid: error.value,
            error
        })
    }
)