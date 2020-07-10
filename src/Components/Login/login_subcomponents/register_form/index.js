import React, { useState } from 'react';

function RegisterForm() {

    const [form_data, set_form_data] = useState({ user_email: "", password: "", pw_confirm: "" });

    const handle_change = (event) => {
        const { name, value } = event.target;
        const new_data = form_data;
        new_data[name] = value;
        set_form_data(new_data);
    }

    const register = () => {
        // if 
    }

    return (
        <div>
            <form>
                <label htmlFor="user_email">email</label>
                <input name="user_email" onChange={handle_change}/>

                <label htmlFor="user_email">username</label>
                <input name="user_email" onChange={handle_change}/>

                <label htmlFor="password">password</label>
                <input name="password" onChange={handle_change}/>

                <label htmlFor="pw_confirm">confirm password</label>
                <input name="pw_confirm" onChange={handle_change}/>

                <button className="btn btn-primary" onClick={register}>register</button>
            </form>
        </div>
    )
}

export default RegisterForm;
