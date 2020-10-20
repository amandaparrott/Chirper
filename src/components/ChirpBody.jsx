import React from "react";

const ChirpBody = props => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{props.chirp.name}</h5>
        <p className="card-text">{props.chirp.message}</p>
      </div>
    </div>
  );
};

export default ChirpBody;

