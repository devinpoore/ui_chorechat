import React, { useState } from 'react';

import "./style.css";

import LoginForm from "./login_subcomponents/login_form";
import RegisterForm from "./login_subcomponents/register_form";

function Login() {
    const [login_view, set_login_view] = useState(true);

    return (
        <div className="login">
            <div>
                
                <div className="header_div">
                    <h1>chore.chat</h1>
                    <h2>sms based chore schedule automation</h2>

                    <hr />
                </div>

                <div className="form-div">

                    <button
                        onClick={() => set_login_view(true)}
                        disabled={login_view}
                        style={{
                            backgroundColor: login_view ? "#28a745" : "#ffffff00",
                            color: login_view ? "white" : "black"
                        }}
                    >
                        Login
                    </button>

                    <button
                        onClick={() => set_login_view(false)}
                        disabled={!login_view}
                        style={{
                            backgroundColor: login_view ? "#ffffff00" : "#007bff",
                            color: login_view ? "black" : "white"
                        }}
                    >
                        Register
                    </button>

                    <hr />

                    {login_view ?
                        <LoginForm /> :
                        <RegisterForm />
                    }

                </div>

            </div>
        </div>
    )
}

export default Login;
