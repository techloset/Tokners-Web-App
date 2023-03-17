import React from "react";

export default function TokensDistribution(props) {
  return (
    <div id="gobalStyle" className="row">
      <div className="col-12 d-flex align-items-end flex-column">
        <div>
          <p>{props.header}</p>
          <h1 style={{ color: props.color, fontSize: "2.5rem",}}>
            {props.tokens}
          </h1>
        </div>
        <div>
          <p>{props.footer}</p>
        </div>
      </div>
    </div>
  );
}
