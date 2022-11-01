import React from "react";

export default function CurrentTime(props) {
  let sunsetHours = [props.times.getHours()];
  let sunsetMinutes = [props.times.getMinutes()];

  if (sunsetMinutes < 10) {
    sunsetMinutes = `0${sunsetMinutes}`;
  }
  if (sunsetHours < 10) {
    sunsetHours = `0${sunsetHours}`;
  }

  return (
    <span>
      {sunsetHours}:{sunsetHours}
    </span>
  );
}
