import React from 'react';
import './App.css';

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
              {/* <hr /> */}
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

        </div>

      </div>

    </div>
  );
}

export default App;
