import React from "react";
import "./BuyProcedureCard.css";
export default function BuyProcedureCard(props) {
  return (
    <>
      <div className="card d-flex p-5 text-light rounded-4 justify-content-center align-items-center m-2" id="buyCard">
        <span className="position-absolute p-3 top-0">{props.number}</span>
        <p className="p-3  text-start">
          {props.desc}
        </p>
      </div>
    </>
  );
}
