import React from 'react';
import { connect } from "react-redux";

import "./style.css";

import chorechat_server_API from "../../../../API/api.js";

const  roomie_info = (props) => {
    
    const comp_state_data = {
        input_values: {
            fName: "",
            lName: "",
            phone: ""
        },
        sms_code: "",
        adding: false
    }

    const handle_change = (event) => {
        const { name, value } = event.target;
        // This is a prime example of where TypeScript would be beneficial, guaranteeing that 'value'
        // must be a string before attempting to run the trim method on it
        comp_state_data.input_values[name] = value.trim();
    }

    const send_verification = async (initial = true, index) => {
        // indicate to the react UI (via redux) that we are going to attempt to validate the current input values;
        // prevent further editing or additional submitting until validation process is completed
        
        try {
            
            // Send code via Twilio Verify API - server
            // Add roomie info to tile array - redux
            
            if (initial) {
                
                // [ DESIGN NOTE ] - Separate the concepts of "server" and "client" here in terms of what happens functionally...  |
                //                   funtionally, what we want to happen in the UI should not depend on the success or failure of  |
                //                   the server response and a failed server response should simply change the ui to reflect that, |
                //                   communicating to the user what the cause of the error was and giving them the appropriate in- |
                //                   instructions for dealing with it in the process. -- d.p. 7.2.20, 9:53pm
                
                // UI Function Flow
                
                // Replaces the 'Add' button with a spinner animation
                props.validating_new_roomie(true);

                // Add the inputted roommate details to the roommate_info list in the store
                props.append_roomie_info(comp_state_data.input_values);

                const validate_add_attempt_RAW = await chorechat_server_API.send_verification(comp_state_data.input_values);
                const response_data = validate_add_attempt_RAW.data;

                console.log(response_data);

                props.validating_new_roomie(false);


            } else {

                const { fName, lName, phone } = props.roomies[index];

                const validate_add_attempt_RAW = await chorechat_server_API.send_verification({ fName, lName, phone });
                const response_data = validate_add_attempt_RAW.data; 

                console.log(response_data);
            }            
            
        } catch (api_error) {
            console.log(api_error);
        }
    }
    
    const verify_sms_code = () => {
        // Confirm code via tile - server - via a different onClick method
    }

    // JSX
    return (
        <div>

            <div className="add-roomie-form">

                <h6>Add Roommate</h6>
                <hr />
                <form className="add-roommate">

                    <div className="inputs-div">

                        <div className="form-group">
                            <label htmlFor="firstName">first name</label>
                            <input
                                name="fName"
                                onChange={handle_change}
                                className="form-control add_roomie_input"
                                id="firstName"
                                disabled={props.validating ? true : false}
                                type="text"
                                aria-describedby="emailHelp"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">last name</label>
                            <input
                                name="lName"
                                onChange={handle_change}
                                className="form-control add_roomie_input"
                                id="lastName"
                                disabled={props.validating ? true : false}
                                type="text"
                                aria-describedby="emailHelp"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">phone #</label>
                            <input
                                name="phone"
                                onChange={handle_change}
                                // value={input_fields.phone}
                                className="form-control add_roomie_input"
                                id="phoneNumber"
                                disabled={props.validating ? true : false}
                                type="tel"

                                // This doesn't actually prevent the form from submitting when the pattern doesn't match -
                                // simply indicates that there's a problem with the format of the entry | Will validate on
                                // server side
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"

                                placeholder="sms capable 10-digit #"
                            />
                        </div>

                    </div>

                    {props.validating ?
                        <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> :
                        <button
                            type="button"
                            onClick={send_verification}
                            className="add-roommate-btn btn btn-success"
                        >
                            Add
                        </button>
                    }

                </form>

            </div>

            <div 
                className="added-roommates"
                style={{ display: props.roomies.length >= 1 ? "block" : "none" }}
            >
                <h6>Roommates:</h6>
                <hr />

                <div className="roomie_tile_grid">
                    {props.roomies ?
                        props.roomies.map( (roomie, index) => {
                            return(

                                <div
                                    className="roomie_tile"
                                    key={index}
                                    style={{ backgroundColor: roomie.verified ? "#28a745" : "goldenrod" }}
                                >
                                    <h6>roommate# {index + 1}:</h6>
                                    <h5>{roomie.fName} {roomie.lName}</h5>

                                    <div className="phone_div">
                                        <p>
                                            <i className="fas fa-mobile-alt"></i> - {roomie.phone}
                                        </p>
                                        {roomie.verified ?
                                            <i className="far fa-check-circle"></i> :
                                            <div>
                                                <form>                                                    
                                                        <input 
                                                            name
                                                        />

                                                        <button
                                                            type="button"
                                                            disabled={comp_state_data.sms_code.length === 6 ? false : true}
                                                            className="btn btn-sm btn-outline-success verify_btn"
                                                            onClick={verify_sms_code}
                                                        >
                                                            Verify
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className="btn btn-sm btn-outline-secondary verify_btn"                                                            
                                                            onClick={() => send_verification(false, index)}
                                                        >
                                                            Resend
                                                        </button>                                
                                                </form>
                                            </div>
                                        }
                                    </div>
                                </div>

                            )
                        }) :
                        <div></div>
                    }
                </div>

            </div>

        </div>
    )
}

// Redux Functions
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

const mapDispatchToProps = dispatch => {
    return {

        validating_new_roomie: (position) => {
                dispatch({ type: "VLDTNG_ROOMIE", position });
        },
        append_roomie_info: (roomie_info) => {
            dispatch({ type: "APPND_ROOMIE", roomie_info })
        }

    };
}

const mapStateToProps = state => {
    return {
        roomies: state.roommate_info,
        validating: state.validating_roomie
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(roomie_info);