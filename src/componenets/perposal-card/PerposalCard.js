import React from "react";
import "./PerposalCard.css";

export default function PerposalCard(props) {
  return (
    <>
      <div className="card bg-light my-4 p-4" id="perposalCard">
        <div className=" px-lg-5 mx-lg-5 text-center d-flex flex-column align-items-center">
          <h2 className="card-title py-2">{props.title}</h2>
          <div className="text-end">
            <h1 className={props.color}>{props.tkn}</h1>
            <span>Tokens</span>
          </div>
          <span className="opacity-50 mt-3">{props.note}</span>
        </div>
      </div>
    </>
  );
}
