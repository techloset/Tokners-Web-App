import React from "react";
import "./PreSaleCard.css";

export default function PreSaleCard(props) {
  return (
    <>
      <div className="bg-light text-dark rounded-4 p-5 text-center position-relative" id="phaseCards">
        <span id="signNumber">{props.signNumber}</span>
        <img src={props.imgURL} alt="" />
        <div className="pb-4">
          <h1>{props.heading}</h1>
          <p>
            <span>{props.date}</span>
          </p>
        </div>
        <h5>1 BNC = {props.wntr} WNTR</h5>
        <p>
          Soft cap: <span> {props.softBNC} BNC</span>
        </p>
        <p>
          Hard cap: <span> {props.hardBNC} BNC</span>
        </p>
      </div>
    </>
  );
}

PreSaleCard.defaultProps = {
  wntr: 100000,
  softBNC: 5000,
  hardBNC: 10000,
};
