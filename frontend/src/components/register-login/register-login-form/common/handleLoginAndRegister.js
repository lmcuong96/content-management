export const handleLogin = ({email, password, showErrors}) => {
    const loginValidate = (email.invalid !== null || password.invalid !== null)
    loginValidate ? showErrors.onChange(true) :
        console.log("login successful");
}

export const handleRegister = ({ email, password, name, confirmPassword, showErrors}) => {

    const registerValidate = name.invalid !== null || email.invalid !== null ||
        password.invalid !== null || confirmPassword.invalid !== null

    const passwordValidate = password.value === confirmPassword.value

    if (registerValidate) {
        showErrors.onChange(true)
    } else if (!passwordValidate) {
        showErrors.onChange(true)
        password.error.onChange("Passwords do not match")
    } else {
        console.log("register successful");
    }

}