import {TextInput} from "../../common/text-input/text-input.jsx";
import {cs, State} from "cs-react";
import {Link} from "react-router-dom";
import {handleLogin, handleRegister} from "./common/handleLoginAndRegister.js";
import {PasswordInput} from "../../common/password-input/password-input.jsx";
import {EmailInput} from "../../common/email-input/email-input.jsx";

const className = "w-full px-2 py-1 my-2 rounded shadow shadow-slate-900/50"
const value = ""
export const RegisterLoginForm = () => cs(
    ['name', (_, next) => TextInput({
        type: "text",
        placeholder: "Enter Your Name",
        className,
        value,
        next
    })],
    ['email', (_, next) => EmailInput({
        type: "email",
        placeholder: "Enter Your Email",
        className,
        value,
        next
    })],
    ['confirmPassword', (_, next) => PasswordInput({
        type: "password",
        placeholder: "Enter Your Confirm Password",
        className,
        value,
        next
    })],
    ['password', (_, next) => PasswordInput({
        type: "password",
        placeholder: "Enter Your Password",
        className,
        value,
        next
    })],
    ['showErrors', (_, next) => State({initValue: false, next})],
    ({email, password, name, confirmPassword, showErrors}) => {
        const isLoginPath = window.location.href.substring(window.location.href.lastIndexOf("/") + 1) === "login" && true;

        return (
            <form className="w-1/3 bg-slate-200 rounded shadow shadow-slate-900/50 p-6 max-h-min">
                <h2 className="text-center text-3xl font-semibold my-5">{isLoginPath ? "Login" : "Register"}</h2>
                {!isLoginPath &&
                    <div className="container">
                        {name.render({showErrors: showErrors.value})}
                    </div>
                }
                <div className="container">
                    {email.render({showErrors: showErrors.value})}
                </div>
                <div className='container'>
                    {password.render({showErrors: showErrors.value})}
                </div>
                {!isLoginPath &&
                    <div className="container">
                        {confirmPassword.render({showErrors: showErrors.value})}
                    </div>
                }
                <div className="flex flex-col justify-between gap-3 my-5">
                    {/*Login*/}
                    {isLoginPath && <button
                        onClick={() => handleLogin({
                            email, password, showErrors
                        })}
                        className="w-full bg-slate-950 text-white py-2 px-4 rounded shadow shadow-slate-900/50 text-center"
                        type="button">
                        Login
                    </button>}

                    {/*Register*/}
                    {!isLoginPath && <button
                        onClick={() => handleRegister({
                            isLoginPath, name, confirmPassword,
                            email, password, showErrors
                        })}
                        className="w-full bg-slate-950 text-white py-2 px-4 rounded shadow shadow-slate-900/50 text-center"
                        type="button">
                        Register
                    </button>}

                    <Link to={`/register-login/${isLoginPath ? "register" : "login"}`}
                          className="hover:underline hover:text-sky-700 text-sky-600">
                        Click here if you {isLoginPath ? "don't" : "already"} have an account
                    </Link>
                </div>
            </form>
        )
    }
)