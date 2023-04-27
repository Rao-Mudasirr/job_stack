import React, { useEffect } from "react";

const GlobalSnackBar = ({ isOpenSnack, setIsOpenSnack }) => {
  let bgColor = "";
  let color = "";
  switch (isOpenSnack.type) {
    case "error":
      color = "red";
      bgColor = "rgba(235, 235, 235, 0.8)";
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
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpenSnack?.isToggle]);

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: bgColor,
        zIndex: 1111,
        padding: "10px 40px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight:700,
        borderLeft: 8,
        color: color,
        top: "20px",
        right: "40px",
      }}
    >
      <p>{isOpenSnack.title}</p>
    </div>
  );
};

export default GlobalSnackBar;
