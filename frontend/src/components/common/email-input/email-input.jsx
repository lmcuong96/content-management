import {bindInput, cs, State} from "cs-react";

export const EmailInput = ({next, value, type, className, placeholder}) => cs(
    ['input', (_, next) => State({initValue: value, next})],
    ({input}) => {
        const error = (input.value?.length && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) ?
            null : "Please enter a valid email";
        return next({
            render: ({showErrors} = {}) => (<>
                <input {...{
                    className,
                    type: type,
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
            invalid: error
        })
    }
)