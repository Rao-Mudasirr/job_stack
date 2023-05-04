import React, { useState, useEffect } from "react";

const QuizTimer = ({ setTimeLeft, timeLeft, onTimeUp }) => {
  useEffect(() => {
    let interval = null;

    if (timeLeft === 0) {
      onTimeUp();
    }

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        localStorage.setItem("timer", timeLeft);
        // const getTiming = localStorage.getItem("timer");
        // setTimeLeft(Number(getTiming));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return <div>{formatTime(timeLeft)}</div>;
};

export default QuizTimer;
