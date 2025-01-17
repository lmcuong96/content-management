export const handleLogin = ({isLoginPath, email, password, name, confirmPassword, showErrors}) => {
    const loginValidate =
        (email.invalid !== null || password.invalid !== null)

    const registerValidate = name.invalid !== null || email.invalid !== null ||
        password.invalid !== null || confirmPassword.invalid !== null

    const passwordValidate = password.value === confirmPassword.value

    if (isLoginPath) {
        loginValidate ? showErrors.onChange(true) :
            console.log("login successful");
    } else {
        if (registerValidate) {
            showErrors.onChange(true)
        } else if (!passwordValidate) {
            showErrors.onChange(true)
            password.error.onChange("Passwords do not match")
        } else {
            console.log("register successful");
        }

    }

}