import React from "react";

const RatingInfoCard = ({ rating }) => {
  return (
    <div className="card col-md-12">
      <div className="card-body">
        <h5 className="card-title float">Rating Scale: </h5>
        <ul>
          {rating.map(rate => {
            return (
              <li key={rate.title}>{`${rate.title} ${rate.description}`}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RatingInfoCard;
