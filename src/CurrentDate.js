import React from "react";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let today = days[props.date.getDay()];
  let day = [props.date.getDate()];
  let month = months[props.date.getMonth()];
  let hours = [props.date.getHours()];
  let minutes = [props.date.getMinutes()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div>
      {today} {day} {month}
      <br />
      {hours}:{minutes}
    </div>
  );
}
