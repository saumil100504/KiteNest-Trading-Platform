import React from "react";

const Summary = () => {
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>
      <div className="section">
        <span>
          <p>Equity</p>
        </span>
        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>Margins used <span>0</span></p>
            <p>Opening balance <span>3.74k</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;