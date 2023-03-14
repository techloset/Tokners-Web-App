import React from "react";
import "./Button.css"

export default function Button(props) {
  return (
    <>
      <div
        className="btn text-light btn-outline-success rounded-5 px-4 mx-2"
        type="submit"
      >
        {props.name}
      </div>
    </>
  );
}
export const FillButton = (props) => {
  return (
    <>
      <div
        id="btn"
        className="btn text-light btn-success rounded-5 px-4 mx-2"
        type="submit"
      >
        {props.name}
      </div>
    </>
  );
};
