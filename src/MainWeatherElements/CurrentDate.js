import React from "react";

export default function CurrentDate(props) {
// Ensure props.date is a Date object to prevent runtime errors
  if (!(props.date instanceof Date)) {
    return <div>Saturday 11:44</div>;
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = days[props.date.getDay()];
  let currentHour = props.date.getHours();
  let currentMinutes = props.date.getMinutes();

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  return (
    <div>
      {currentDay} {currentHour}:{currentMinutes}
    </div>
  );
}

