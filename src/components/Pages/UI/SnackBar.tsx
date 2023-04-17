import React, { useEffect } from "react";

interface snackbarMsg {
  title: string;
  isToggle: boolean;
  type: string;
  top?: string;
  right?: string;
}

interface Props {
  isOpenSnack: snackbarMsg;
  setIsOpenSnack: React.Dispatch<React.SetStateAction<snackbarMsg>>;
}

const GlobalSnackBar = (props: Props) => {
  const { isOpenSnack, setIsOpenSnack } = props;
  let bgColor: string = "";
  let color: string = "";
  switch (isOpenSnack.type) {
    case "error":
      color = "error.main";
      bgColor = "error.light";
      break;
    case "warning":
      color = "#8F6D06";
      bgColor = "warning.main";
      break;
    case "success":
      color = "success.main";
      bgColor = "success.light";
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
        zIndex: 11,
        padding: 2,
        borderRadius: "4px",
        borderLeft: 8,
        color: color,
        top: isOpenSnack.top ? isOpenSnack.top : "5px",
        right: isOpenSnack.right ? isOpenSnack.right : "15px",
      }}
    >
      <p>{isOpenSnack.title}</p>
    </div>
  );
};

export default GlobalSnackBar;
