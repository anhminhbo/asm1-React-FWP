import React, { useEffect } from "react";

const CountDown = ({ minute, second, setSecond, setMinute }) => {
  const formatTime = () => {
    if (+minute < 10) minute = "0" + minute;
    if (+second < 10) second = "0" + second;
  };

  const handleOnClick = () => {
    setInterval(() => {
      if (+second === 0 && +minute >= 1) {
        setSecond(59);
        setMinute(() => +minute - 1);
      } else if (+second >= 0) {
        setSecond(() => +second - 1);
      }
      console.log(minute);
      formatTime();
    }, 1000);
  };

  useEffect(() => {
    formatTime();
  }, []);

  return (
    <>
      <h1>
        {minute} : {second}
      </h1>

      <button onClick={handleOnClick}></button>
    </>
  );
};

export default CountDown;
