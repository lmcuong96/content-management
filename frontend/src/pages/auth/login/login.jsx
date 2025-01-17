import {cs, State} from "cs-react";
import {Link} from "react-router-dom";
import {TextInput} from "../../../components/common/text-input/text-input.jsx";
import {RegisterLoginForm} from "../../../components/register-login/register-login-form/register-login-form.jsx";

export const Login = () => cs(
    () => {
        return (
            <section className="container flex gap-20 items-center justify-center">
                <div className="flex flex-col justify-items-start">
                    <h1 className="text-left text-4xl font-bold text-slate-950">Content Management</h1>
                    <p className="text-left text-slate-950 text-3xl">Enjoy the convenience of Content Management</p>
                </div>
                {RegisterLoginForm()}
            </section>
        )
    }
)