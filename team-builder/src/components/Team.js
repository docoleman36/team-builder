import React from "react";

const Team = props => {
  return (
    <div>
      {props.teamList.map(value => {
        return (
          <div className="value" key={value.id}>
            <h2>{value.name}</h2>
            <p>{value.email}</p>
            <p>{value.role}</p>

          </div>
        )
      })}
    </div>
  );
};

export default Team;