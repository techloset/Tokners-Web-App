import React from "react";
import "./ToeknCard.css";

export default function ToeknCard (props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" id="tokenCard">
      <div className="card m-1 p-1">
        <div className="row">
          <div className="col-2">
            <img src={props.iconURL} className="w-100" alt="" />
          </div>
          <div className="col-10">
            <span className={props.color}>Year {props.year}</span>
            <p>{props.dayArrange}</p>
            <div className="opacity-50">
              <p className="m-0">{props.perDayTkn}</p>
              <span>{props.totalTkn}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
