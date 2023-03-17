import React from "react";
import "./OurTeamCard.css";

export default function OurTeamCard(props) {
  return (
    <>
      <div
        className="col-12 text-light rounded-4 overflow-hidden"
        style={{
          backgroundImage: `url(${props.bgURL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundColor: "black",
          backgroundPosition: "bottom",
        }}
      >
        <div className="row">
          <div className="col-12 p-4">
            <h4>{props.name}</h4>
            <p>{props.designation}</p>
          </div>
        </div>
        <img src={props.imgURL} className="w-100 h-50 px-5" alt="Profile Pic" />
      </div>
    </>
  );
}
