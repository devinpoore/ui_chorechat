// Dependencies
import React from 'react';
import { connect } from "react-redux";

// CSS
import './style.css';

// Components
import RoomieInfo from "./home_subcomponents/roomie_info";
import ChoreInfo from "./home_subcomponents/chore_info";
import ScheduleInfo from "./home_subcomponents/schedule_info";

function Home(props) {
    return (
        <div className="container">

            {/* Header Component */}
            <div className="header row">

                {/* <div className="col-md-12"> */}
                {/* <header> */}
                <h1>chore.chat</h1>
                <h2>sms based chore schedule automation</h2>
                {/* </header> */}
                {/* <hr /> */}
                {/* </div> */}

            </div>

            {/* Chorechat Body Component */}
            <div className="row cc-body">

                <div className="button-column col-md-4">

                    {/* This should be refactored into its own component */}
                    {/* <div
                        className="button"
                        style={{
                            backgroundColor: props.sub_component === "roomie" ? "#54c654" : "white",
                            color: props.sub_component === "roomie" ? "white" : "black",
                            textAlign: props.sub_component === "roomie" ? "center" : "right"
                        }}
                    >
                        <div className="row">

                            <div className="button-txt col-8"
                                style={{ textAlign: true ? "right" : "center" }}
                            >
                                <h5>roommate info:</h5>
                            </div>

                            <div className="col-4">
                                {props.sub_component === "roomie" ?
                                    <div className="arrow">
                                        <i class="fas fa-long-arrow-alt-right"></i>
                                        <i className="fas fa-arrow-alt-circle-right"></i>
                                    </div> :
                                    <button className="action-btn btn" onClick={() => props.toggle_comp("roomie")}>
                                        <i className="fas fa-plus"></i>
                                        <i class="far fa-plus-square"></i>
                                        <i class="fas fa-plus-square"></i>
                                        <i class="fas fa-plus-circle"></i>
                                    </button>
                                }
                            </div>

                        </div>

                    </div> */}

                    <div className="button">
                        <h5>roommate info:</h5>
                        <button className="action-btn btn" onClick={() => props.toggle_comp("roomie")}>
                            <i className="fas fa-plus"></i>
                            {/* <i class="far fa-plus-square"></i> */}
                            {/* <i class="fas fa-plus-square"></i> */}
                            {/* <i class="fas fa-plus-circle"></i> */}
                        </button>
                    </div>

                    <div className="button">
                        <h5>chore info:</h5>
                        <button className="action-btn btn" onClick={() => props.toggle_comp("chore")}>
                            <i className="fas fa-plus"></i>
                            {/* <i class="far fa-plus-square"></i> */}
                            {/* <i class="fas fa-plus-square"></i> */}
                            {/* <i class="fas fa-plus-circle"></i> */}
                        </button>
                    </div>

                    <div className="button">
                        <h5>schedule info:</h5>
                        <button className="action-btn btn" onClick={() => props.toggle_comp("schedule")}>
                            <i className="fas fa-plus"></i>
                            {/* <i class="far fa-plus-square"></i> */}
                            {/* <i class="fas fa-plus-square"></i> */}
                            {/* <i class="fas fa-plus-circle"></i> */}
                        </button>
                    </div>

                    {/* Roommate Info Component */}
                    {/* <div className="row info-comp">
            <div className="col-md-12">
              <h5>roommate info:</h5> */}

                    {/* <hr className="divider"/> */}

                    {/* Add Roommate Component */}
                    {/* <form className="form-inline">

                <label for="nameInput">Name:</label>
                <input className="form-control" id="nameInput"/>

                <label for="numberInput">Mobile #:</label>
                <input className="form-control" id="numberInput"/>

                <button type="button" className="btn btn-sm btn-primary">Verify Number</button>

              </form> */}

                    {/* <hr className="divider"/> */}

                    {/* Added Roommates Component */}
                    {/* <div className="currRoomies">
                <h4>**this section will appear/disappear as roommates are added</h4>
                <h6>current roommates:</h6>
                <hr />
                <p>Devin xxxxxx2570 edit <i class="fas fa-times"></i></p>
                <p>Gabe xxxxxx2570 edit <i class="fas fa-times"></i></p>
                <p>Peter xxxxxx2570 edit <i class="fas fa-times"></i></p>
              </div>           */}

                    {/* </div>

          </div> */}

                </div>

                <div className="active-comp col-md-8">
                    {props.sub_component === "roomie" ?
                        <RoomieInfo /> :
                        props.sub_component === "chore" ?
                            <ChoreInfo /> :
                            <ScheduleInfo />
                    }
                </div>


            </div>

            {/* <hr />

            <footer>
                <p>Designed, developed, and maintained with <span role="img" aria-label="heart emoji">💗</span> by Code Poet Studios | Copyright © 2020</p>
            </footer> */}

        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        toggle_comp: (comp) => dispatch({ type: "TOGGLE_COMP", comp })
    };
}

const mapStateToProps = state => {
    return {
        sub_component: state.sub_component
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
