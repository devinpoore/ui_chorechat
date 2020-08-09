import React, { useState } from 'react';

import chorechat_api from "../../../../API/api.js";

// [DESIGN NOTE] - Choosing to outsource all validation to the backend in the interest of getting to MVP.  |
//                 In the future, obviously, front end validation should be implemented with a focus on UX |
//                 - d.p. 7.9.20, 9:33pm

function RegisterForm() {

    const [form_data, set_form_data] = useState({ email: "", username: "", password: "", pw_confirm: "" });

    const handle_change = (event) => {
        const { name, value } = event.target;
        const new_data = form_data;
        new_data[name] = value;
        set_form_data(new_data);
    }

    const register = async () => {
        // Assume user is clicking register once all info has been filled out
        const register_request = await chorechat_api.register(form_data);
        const register_data = register_request.data;

        console.log(register_request.status);

        console.log(register_data);

        if (register_request.status === 200) {
            // redirect to login
        }

        // store data in state/session
        // redirect to clean url to avoid data appended in url
    }

    return (
        <div>
            <form>
                <label htmlFor="email">email</label>
                <input name="email" onChange={handle_change}/>

                <label htmlFor="username">username</label>
                <input name="username" onChange={handle_change}/>

                <label htmlFor="password">password</label>
                <input name="password" onChange={handle_change}/>

                <label htmlFor="pw_confirm">confirm password</label>
                <input name="pw_confirm" onChange={handle_change}/>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={register}
                >
                    register
                </button>
            </form>
        </div>
    )
}

export default RegisterForm;
