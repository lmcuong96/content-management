export const handleLogin = ({email, password,name,confirmPassword, showErrors}) => {
    if (email.invalid !== null || password.invalid !== null) {
        showErrors.onChange(true);
    } else {
        console.log("Success");
    }
}