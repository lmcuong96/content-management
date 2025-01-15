import {Input} from "../../common/input/input.jsx";
import {cs, State} from "cs-react";
import {Link} from "react-router-dom";
import {handleLogin} from "./common/handleLoginAndRegister.js";

export const RegisterLoginForm = () => cs(
    ['name', (_, next) => Input({
        type: "text",
        placeholder: "Enter Your Name",
        className: "w-full px-2 py-1 my-2 rounded shadow shadow-slate-900/50",
        value: "",
        next
    })],
    ['email', (_, next) => Input({
        type: "email",
        placeholder: "Enter Your Email",
        className: "w-full px-2 py-1 my-2 rounded shadow shadow-slate-900/50",
        value: "",
        next
    })],
    ['password', (_, next) => Input({
        type: "password",
        placeholder: "Enter Your Password",
        className: "w-full px-2 py-1 my-2 rounded shadow shadow-slate-900/50",
        value: "",
        next
    })],
    ['confirmPassword', (_, next) => Input({
        type: "password",
        placeholder: "Enter Your Confirm Password",
        className: "w-full px-2 py-1 my-2 rounded shadow shadow-slate-900/50",
        value: "",
        next
    })],
    ['showErrors', (_, next) => State({initValue: false, next})],
    ({email, password, name, confirmPassword, showErrors}) => {
        const pathname = window.location.href.substring(window.location.href.lastIndexOf("/") + 1) === "login" && true;

        return (
            <form className="w-1/3 bg-slate-200 rounded shadow shadow-slate-900/50 p-6 max-h-min">
                <h2 className="text-center text-3xl font-semibold my-5">{pathname ? "Login" : "Register"}</h2>
                {!pathname &&
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
                {!pathname &&
                    <div className="container">
                        {confirmPassword.render({showErrors: showErrors.value})}
                    </div>
                }
                <div className="flex flex-col justify-between gap-3 my-5">
                    <button
                        onClick={() => handleLogin({email, password, showErrors})}
                        className="w-full bg-slate-950 text-white py-2 px-4 rounded shadow shadow-slate-900/50 text-center"
                        type="button">
                        {pathname ? "Login" : "Register"}
                    </button>
                    <Link to={`/register-login/${pathname ? "register" : "login"}`}
                          className="hover:underline hover:text-sky-700 text-sky-600">
                        Click here if you {pathname ? "don't" : "already"} have an account
                    </Link>
                </div>
            </form>
        )
    }
)