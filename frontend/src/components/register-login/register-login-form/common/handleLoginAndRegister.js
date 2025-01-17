export const handleLogin = ({pathname, email, password, name, confirmPassword, showErrors}) => {
    const loginValidate =
        (email.invalid !== null || password.invalid !== null)

    const registerValidate = name.invalid !== null || email.invalid !== null ||
        password.invalid !== null || confirmPassword.invalid !== null

    const equalPassword = password.value === confirmPassword.value ? true : password.error.onChange("Password does not match")
    // console.log("name.invalid !== null: " + name.invalid !== null);
    // console.log("email.invalid !== null: " + email.invalid !== null);
    // console.log("password.invalid !== null: " + password.invalid !== null);
    // console.log("registerValidate: " + registerValidate);

    if (pathname) {
        loginValidate ? showErrors.onChange(true) :
            console.log("login successful");
    } else {
        registerValidate || !equalPassword ? showErrors.onChange(true) :
            console.log("register successful");
    }

}