import React, { useEffect } from "react";

const GlobalSnackBar = ({ isOpenSnack, setIsOpenSnack }) => {
  let bgColor = "";
  let color = "";
  switch (isOpenSnack.type) {
    case "error":
      color = "red";
      bgColor = "rgba(229, 103, 103, 0.43)";
      break;
    case "warning":
      color = "#8F6D06";
      bgColor = "rgba(226, 188, 91, 0.53)";
      break;
    case "success":
      color = "green";
      bgColor = "rgba(65, 176, 29, 0.62)";
      break;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenSnack({ title: "", isToggle: false, type: "" });
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpenSnack]);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: bgColor,
        zIndex: 1111,
        padding: 8,
        borderRadius: "4px",
        fontSize: "20px",
        borderLeft: 8,
        color: color,
        top: "5px",
        right: "15px",
      }}
    >
      <p>{isOpenSnack.title}</p>
    </div>
  );
};

export default GlobalSnackBar;
