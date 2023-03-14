import React from "react";
import { Link } from "react-router-dom";
import "./QuestionCard.css";

export default function QestionCard(props) {
  const listItems = [];
  for (let i = 0; i < props.numberOfItem; i++) {
    const itemValue = eval(`props.item${i}`);
    listItems.push(
      <li key={i}>
        <div className="d-flex">
          <div className="number" style={{ color: props.textColor }}>
            {i + 1}
          </div>

          <Link className="text" to="#">{itemValue}</Link>
        </div>
      </li>
    );
  }
  return (
    <>
      <div className="col-12 col-md-6 col-xl-3">
        <img src={props.imgURL} alt="" />
        <ol className="list-unstyled">{listItems}</ol>
      </div>
    </>
  );
}
