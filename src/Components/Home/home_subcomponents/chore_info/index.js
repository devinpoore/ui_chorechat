import React from 'react';

const chore_info = () => {
    return (
        <div>
            <div className="add-roomie-form">

                <h6>Add Roommate</h6>
                <hr />
                <form className="add-roommate">

                    <div className="inputs-div">
                        <div className="form-group">
                            <label for="firstName">chore name</label>
                            <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" />
                        </div>

                        <div className="form-group">
                            <label for="lastName">last name</label>
                            <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" />
                        </div>

                        <div className="form-group">
                            <label for="phoneNumber">phone #</label>
                            <input type="password" className="form-control" id="phoneNumber" placeholder="123-456-7890" />
                        </div>
                    </div>

                    <button type="button" className="add-roommate-btn btn btn-success">Add</button>

                </form>

            </div>
        </div>
    )
}

export default chore_info;