import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card p-4 text-dark rounded-4 m-2">
        <div className="card-body">
          <img
            src={props.imgURL}
            style={{ width: "70px" }}
            className="card-img-top"
            alt="..."
          />
          <h5 className="card-title">
            For <stront style={{color: props.color}}>{props.title}</stront>
          </h5>
          <p className={props.descHeight}>{props.desc}</p>
          <div>
            <a href="#" style={{color: props.color}} className="anchor">
              Learn More
            </a>
            <span style={{color: props.color}} className="anchor mx-2">&#8594;</span>
          </div>
        </div>
      </div>
    </>
  );
}
