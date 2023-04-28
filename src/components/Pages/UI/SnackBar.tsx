import React, { useEffect } from "react";

const GlobalSnackBar = ({ isOpenSnack, setIsOpenSnack }) => {
  let bgColor = "";
  let color = "";
  let icon = "";
  switch (isOpenSnack.type) {
    case "error":
      color = "#fff";
      bgColor = "#d32f2f";
      icon = "uil-times-circle";
      break;
    case "warning":
      color = "#8F6D06";
      bgColor = "rgba(226, 188, 91, 0.53)";
      icon = "uil-exclamation-triangle";
      break;
    case "success":
      color = "#fff";
      bgColor = "#2e7d32";
      icon = "uil-check-circle";
      break;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenSnack({ title: "", isToggle: false, type: "" });
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpenSnack.isToggle]);

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: bgColor,
        zIndex: 1111,
        padding: "6px 16px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight:700,
        borderLeft: 8,
        color: color,
        top: "20px",
        right: "40px",
      }}
    >
      <p><i className={`uil ${icon} mb-[1px] text-[18px] mr-1 color-[${color}]`}></i> {isOpenSnack.title}</p>
    </div>
  );
};

export default GlobalSnackBar;
