// Dependencies
import React from 'react';
import { connect } from "react-redux";

// CSS
import './App.css';

// Components


function App() {
  return (
    <div className="container">

      {/* Header Component */}
      <div className="row">

        <div className="col-md-12">
          <h1>chorechat</h1>
          <hr />
          <hr />
        </div>

      </div>

      {/* Chorechat Body Component */}
      <div className="row cc-body">

        <div className="col-md-12">

          {/* Roommate Info Component */}
          <div className="row info-comp">
            <div className="col-md-12">
              <h5>roommate info:</h5>

              <hr className="divider"/>

              {/* Add Roommate Component */}              
              <form className="form-inline">

                <label for="nameInput">Name:</label>
                <input className="form-control" id="nameInput"/>

                <label for="numberInput">Mobile #:</label>
                <input className="form-control" id="numberInput"/>

                <button type="button" className="btn btn-sm btn-primary">Verify Number</button>

              </form>

              <hr className="divider"/>
              
              {/* Added Roommates Component */}
              <div className="currRoomies">
                <h4>**this section will appear/disappear as roommates are added</h4>
                <h6>current roommates:</h6>
                <hr />
                <p>Devin xxxxxx2570 edit <i class="fas fa-times"></i></p>
                <p>Gabe xxxxxx2570 edit <i class="fas fa-times"></i></p>
                <p>Peter xxxxxx2570 edit <i class="fas fa-times"></i></p>
              </div>          

            </div>

          </div>

          {/* Chore Info Component */}
          <div className="row info-comp">
            <div className="col-md-12">
              <h5>chore info:</h5>
              {/* <hr /> */}
            </div>
          </div>

          {/* Schedule Info Component */}
          <div className="row info-comp">
            <div className="col-md-12">
              <h5>schedule info:</h5>
              {/* <hr /> */}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p>Designed, developed, and maintained with <span role="img" aria-label="heart emoji">💗</span> by Code Poet Studios</p>
              {/* <hr /> */}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    incr: () => dispatch({type: "INCR"})
  };
}

const mapStateToProps = state => {
  return {
    test: state.testState
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
