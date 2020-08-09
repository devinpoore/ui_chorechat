import React from 'react';
// import React, { useState } from 'react';

function LoginForm() {
    // const initial_state = { user_email: "", pw: "" };

    // const [form_data, set_form_data] = useState(initial_state);

    return (
        <div>
            <form>
                <label htmlFor="user_email">username | email</label>
                <input name="user_email" />

                <label htmlFor="password">password</label>
                <input name="password" />

                <button
                    className="btn btn-success"
                >
                    login
                </button>
            </form>
        </div>
    )
}

export default LoginForm;
