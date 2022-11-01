import React from "react";

export default function CurrentTime(props) {
  let sunriseHours = [props.time.getHours()];
  let sunriseMinutes = [props.time.getMinutes()];

  if (sunriseMinutes < 10) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }
  if (sunriseHours < 10) {
    sunriseHours = `0${sunriseHours}`;
  }

  return (
    <span>
      {sunriseHours}:{sunriseMinutes}
    </span>
  );
}
